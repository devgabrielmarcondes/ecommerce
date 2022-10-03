const createError = require("../error.js");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();
const Comment = require("../models/Comment");

// ADD COMMENT

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const { id } = req.user.id;
  const newComment = new Comment({ id, ...req.body });
  try {
    const savedComment = await newComment.save();
    return res.status(200).send(savedComment);
  } catch (id) {
    console.log(id);
  }
});

// DELETE COMMENT

router.delete("/:id", verifyTokenAndAuthorization, async (req, res, next) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (comment.userId === req.user.id) {
      await Comment.findByIdAndDelete(id);
      return res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You can only delete your comment!"));
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USERS COMMENTS

router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const comments = await Comment.find({ productId });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;

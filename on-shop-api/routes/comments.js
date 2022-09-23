const createError = require("../error.js");
const { verifyToken } = require("./verifyToken");
const router = require("express").Router();
const Comment = require("../models/Comment");

// ADD COMMENT

router.post("/", verifyToken, async (req, res) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    return res.status(200).send(savedComment);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// DELETE COMMENT

router.delete("/:id", verifyToken, async (req, res, next) => {
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

// GET COMMENTS

router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const comments = await Comment.find({ productId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

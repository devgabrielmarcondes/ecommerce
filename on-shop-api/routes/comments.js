const createError = require("../error.js");
const { verifyToken } = require("./verifyToken");
const Product = require("../models/Product");

const router = require("express").Router();

// ADD COMMENT

router.post("/", verifyToken, async (req, res) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE COMMENT

router.delete("/:id", verifyToken, async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const product = await Product.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === product.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You can delete ony your comment!"));
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET COMMENTS

router.get("/:productId", async (req, res) => {
  try {
    const comments = await Comment.find({ productId: req.params.productId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

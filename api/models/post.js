const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

const PostSchema = new mongoose.Schema(
  {
    userId: String,
    photoUrl: String,
    firstName: String,
    lastName: String,
    message: { type: String, required: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

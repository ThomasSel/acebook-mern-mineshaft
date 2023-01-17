const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({ message: {type: String, required: true }})

const PostSchema = new mongoose.Schema({
  message: { type: String, required: true },
  comments: [commentSchema]
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

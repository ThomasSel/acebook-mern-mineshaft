const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }
});

const Like = mongoose.model("Like", LikeSchema);
// const post = Post.find()
// const user = User.find()
// let oneLike = new Like({userId: '63c58154a155d3cecec646f2', postId: '63c6e500268f47ca41db4c49'}).save()
// console.log(oneLike)

module.exports = Like;


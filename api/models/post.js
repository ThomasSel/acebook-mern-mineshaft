const mongoose = require("mongoose");
const User = require("./user");

// [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

const PostSchema = new mongoose.Schema({ 
  userId: String,
  photoUrl: String,
  firstName: String,
  lastName: String,
  message: String 
},{ timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

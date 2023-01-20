const { post } = require("superagent");
const { response } = require("../app");
const Post = require("../models/post");
const TokenGenerator = require("../models/token_generator");

const PostsController = {
  Index: (req, res) => {
    Post.find(async (err, posts) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ posts: posts, token: token });
    }).sort({ createdAt: -1 });
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.save(async (err) => {
      if (err) {
        throw err;
      }

      Post.find(async (err, posts) => {
        if (err) {
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.status(201).json({ message: "OK", posts: posts, token: token });
      }).sort({ createdAt: -1 });
    });
  },
  AddComment: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      post.comments.push({ message: req.body.message });
      await post.save();

      const updatedPosts = await Post.find().sort({ createdAt: -1 });
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res
        .status(201)
        .json({ message: "OK", posts: updatedPosts, token: token });
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PostsController;

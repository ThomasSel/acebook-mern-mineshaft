const { post } = require("superagent");
const { response } = require("../app");
const Post = require("../models/post");
const User = require("../models/user");

const TokenGenerator = require("../models/token_generator");
const jwt = require("jsonwebtoken");

const PostsController = {
  Index: (req, res) => {
    Post.find(async (err, posts) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ posts: posts, token: token });
    }).sort({createdAt: -1});
  },


  Create: (req, res) => {

    User.find({ _id: req.user_id }, function (err, docs) {
      if (err){
        throw err;
      }
      console.log(docs)
      const post = new Post({ userId: req.user_id, photoUrl: docs[0].photoUrl, firstName: docs[0].firstName, lastName: docs[0].lastName, message: req.body.message });
      // const post = new Post({ userId: req.user_id, firstName: docs[0].firstName, lastName: docs[0].lastName, message: req.body.message });
      
      post.save(async (err) => {
        if (err) {
          throw err;
        }
        Post.find(async (err, posts) => {
          if (err) {
            throw err;
          }
          const token = await TokenGenerator.jsonwebtoken(req.user_id);
          // const decodedToken = jwt.decode(token);
          res.status(201).json({ message: "OK", posts: posts, token: token });
        }).sort({createdAt: -1});
      });


    });
  },
};

module.exports = PostsController;

const express = require("express");
const Like = require("../models/like")
const TokenGenerator = require("../models/token_generator")
// 

const LikeController = {
  Index: (req,res) => {
    let variable = req.params.postId;
    Like.find({postId: variable})
    .exec((err, likes) => {
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, likes: likes, token: token});
    });
  },
  Create: (req,res) => {
    const likeData = { 
      postId: req.body.postId,
      userId: req.user_id
    };

    const like = new Like(likeData);
    let variable = req.body.postId;
    const token = TokenGenerator.jsonwebtoken(req.user_id);
 
    like.save(saveError => {
      if (saveError) return res.status(400).send(JSON.stringify({saveError: saveError}));

      Like.find({postId: variable})
        .exec((err, likes) => {
          if(err) return res.status(400).send(JSON.stringify({findError: err}));
          res.status(200).json({ success: true, likes: likes, token: token});
        })
        
    });
  },
};

// GET /likes
// router.get('/', (req, res) => {/* Get likes here */})

// POST /likes
// router.post('/', (req, res) => {/* Create Like */})

module.exports = LikeController;
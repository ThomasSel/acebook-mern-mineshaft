const express = require("express");
const Like = require("../models/like")

// 
const LikeController = {
  Index: (req,res) => {
    let variable = req.body.postId;
    Like.find(variable)
    .exec((err, likes) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, likes});
    });
  },
  Update: (req, res) => {
    const likeData = { 
    postId: req.body.post,
    userId: req.userId
    };
  },
  Create: (req,res) => {
    const like = new Like(likeData);
    like.save();
    Like.find(variable)
    .exec((err, likes) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({ success: true, likes})
  });
  },
};

// GET /likes
// router.get('/', (req, res) => {/* Get likes here */})

// POST /likes
// router.post('/', (req, res) => {/* Create Like */})

module.exports = LikeController;
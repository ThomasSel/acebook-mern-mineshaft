const express = require("express");
const router = express.Router();
const { Like } = require("../models/like")

router.post("/getLikes",(req,res) => {
  let variable = req.body.postId;

  Like.find(variable)
  .exec((err, likes) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({ success: true, likes})
  })
})

module.exports = router;
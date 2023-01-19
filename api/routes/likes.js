const express = require("express");
const router = express.Router();

const LikeController = require("../controllers/likes")

router.get("/:postId", LikeController.Index);
router.post("/", LikeController.Create);

module.exports = router;
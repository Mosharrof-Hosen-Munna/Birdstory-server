const {
  replyLikePostController,
  replyDislikePostController,
} = require("../Controllers/likeDislikeController");
const {
  replyPostController,
  replyDeleteController,
} = require("../Controllers/replyControllers");

const router = require("express").Router();

router.post("/comment/reply/:commentId", replyPostController);
router.delete("/reply/:replyId", replyDeleteController);
router.post("/reply/like/:replyId", replyLikePostController);
router.post("/reply/dislike/:replyId", replyDislikePostController);

module.exports = router;

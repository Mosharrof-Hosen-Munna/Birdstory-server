const {
  commentPostController,
  commentDeleteController,
} = require("../Controllers/commentControllers");
const {
  commentLikePostController,
  commentDislikePostController,
} = require("../Controllers/likeDislikeController");

const router = require("express").Router();

router.post("/comment/:postId", commentPostController);

router.delete("/comment/delete/:commentId", commentDeleteController);

router.post("/comment/like/:commentId", commentLikePostController);

router.post("/comment/dislike/:commentId", commentDislikePostController);

module.exports = router;

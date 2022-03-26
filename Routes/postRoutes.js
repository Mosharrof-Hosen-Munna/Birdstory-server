const {
  postLikePostController,
  postDislikePostController,
} = require("../Controllers/likeDislikeController");
const {
  getSingleUserPostsController,
  getSinglePostController,
  createPostController,
  updateSinlgePostController,
  deleteSinglePostController,
  getAllPostController,
} = require("../Controllers/postControllers");

const router = require("express").Router();

// get all post
router.get("/all", getAllPostController);
// get an user posts
router.get("/:userId", getSingleUserPostsController);

// // get a single post
router.get("/post/:postId", getSinglePostController);

// create new post
router.post("/post/create", createPostController);

// update a single post
router.put("/post/update/:postId", updateSinlgePostController);

// delete a singlePost
router.delete("/post/delete/:postId", deleteSinglePostController);

// like a post
router.post("/post/like/:postId", postLikePostController);

// dislike a post
router.post("/post/dislike/:postId", postDislikePostController);
module.exports = router;

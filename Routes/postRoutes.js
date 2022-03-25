const {
  getSingleUserPostsController,
  getSinglePostController,
  createPostController,
  updateSinlgePostController,
  deleteSinglePostController,
  getAllPostController,
} = require("../Controllers/postControllers");

const router = require("express").Router();

// get an user posts
router.get("/posts/:userId", getSingleUserPostsController);

// get all post
router.get("/posts", getAllPostController);

// get a single post
router.get("/post/:postId", getSinglePostController);

// create new post
router.post("/post/create", createPostController);

// update a single post
router.put("/post/update/:postId", updateSinlgePostController);

// delete a singlePost
router.delete("/post/delete/:postId", deleteSinglePostController);

module.exports = router;

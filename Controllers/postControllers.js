const Post = require("../Models/Post");
const Profile = require("../Models/Profile");

exports.getSingleUserPostsController = async (req, res, next) => {
  const id = req.params.userId;

  try {
    const posts = await Post.find({
      author: id,
    });
    res.status(200).json(posts);
  } catch (err) {
    res.json("User not found");
  }
};

exports.getSinglePostController = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findOne({ _id: postId }).populate({
      path: "comments",
      populate: {
        path: "replies",
        populate: {
          path: "author",
          populate: {
            path: "profile",
            select: "pic name",
          },
          select: "email",
        },
      },
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Post not found" });
  }
};

exports.createPostController = async (req, res, next) => {
  const { title, body, author, thumbnail } = req.body;

  try {
    const newPost = new Post({
      title,
      body,
      author,
      thumbnail,
      likes: [],
      dislikes: [],
      comments: [],
    });

    const createdPost = await newPost.save();

    await Profile.findOneAndUpdate(
      { user: author },
      {
        $push: {
          posts: createdPost._id,
        },
      }
    );

    res.json(createdPost);
  } catch (err) {
    res.status(500).json({ message: "failed to create new post" });
  }
};

exports.deleteSinglePostController = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    const deletedPost = await Post.findByIdAndDelete({ _id: postId });
    res.json(deletedPost);
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};

exports.updateSinlgePostController = async (req, res, next) => {
  const updateData = req.body;
  const postId = req.params.postId;
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, {
      $set: updateData,
    });

    res.status(201).json({
      message: "Post updated Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to Update",
    });
  }
};

exports.getAllPostController = async (req, res, next) => {
  try {
    const allPost = await Post.find({});
    res.status(200).json(allPost);
  } catch (err) {
    console.log(err);
  }
};

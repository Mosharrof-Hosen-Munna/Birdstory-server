const Comment = require("../Models/Comments");
const Post = require("../Models/Post");
const User = require("../Models/User");

exports.commentPostController = async (req, res, next) => {
  const postId = req.params.postId;
  const { body, author } = req.body;

  try {
    const newComment = new Comment({
      body,
      author,
      commentLikes: [],
      commentDislikes: [],
      replies: [],
    });

    const createdComment = await newComment.save();

    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $push: { comments: createdComment._id },
      }
    );

    const commentJSON = await Comment.findById(createdComment._id);

    const commentAuthor = await User.findById(author).populate({
      path: "profile",
      select: "name pic",
    });

    res.status(201).json({ createdComment: commentJSON, commentAuthor });
  } catch (err) {
    res.json("unsucessful");
    console.log(err);
  }
};

exports.commentDeleteController = async (req, res, next) => {
  const commentId = req.params.commentId;

  try {
    const deletedComment = await Comment.findOneAndDelete({ _id: commentId });

    if (deletedComment) {
      res.json(deletedComment);
    } else {
      res.status(501).json({ message: "failed" });
    }
  } catch (err) {
    console.log(err);
  }
};

const Comment = require("../Models/Comments");
const Post = require("../Models/Post");
const Reply = require("../Models/Reply");

exports.postLikePostController = async (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(postId);
    const alreadyLiked = post.likes.includes(userId);

    if (!alreadyLiked) {
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          $push: { likes: userId },
          $pull: { dislikes: userId },
        }
      );

      res.status(201).json({ message: "success" });
    } else {
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          $pull: { likes: userId },
        }
      );
      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.postDislikePostController = async (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(postId);
    const alreadyDisliked = post.dislikes.includes(userId);

    if (!alreadyDisliked) {
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          $push: { dislikes: userId },
          $pull: { likes: userId },
        }
      );

      res.status(201).json({ message: "success" });
    } else {
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          $pull: { dislikes: userId },
        }
      );
      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.commentLikePostController = async (req, res, next) => {
  const { commentId } = req.params;
  const { userId } = req.body;

  try {
    const comment = await Comment.findById(commentId);
    const alreadyLiked = comment.commentLikes.includes(userId);

    if (!alreadyLiked) {
      await Comment.findOneAndUpdate(
        { _id: commentId },
        {
          $push: { commentLikes: userId },
          $pull: { commentDislikes: userId },
        }
      );

      res.status(201).json({ message: "success" });
    } else {
      await Comment.findOneAndUpdate(
        { _id: commentId },
        {
          $pull: { commentLikes: userId },
        }
      );
      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.commentDislikePostController = async (req, res, next) => {
  const { commentId } = req.params;
  const { userId } = req.body;

  try {
    const comment = await Comment.findById(commentId);
    const alreadyDisliked = comment.commentDislikes.includes(userId);

    if (!alreadyDisliked) {
      await Comment.findOneAndUpdate(
        { _id: commentId },
        {
          $push: { commentDislikes: userId },
          $pull: { commentLikes: userId },
        }
      );

      res.status(201).json({ message: "success" });
    } else {
      await Comment.findOneAndUpdate(
        { _id: commentId },
        {
          $pull: { commentDislikes: userId },
        }
      );
      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.replyLikePostController = async (req, res, next) => {
  const { replyId } = req.params;
  const { userId } = req.body;

  try {
    const reply = await Reply.findById(replyId);
    const alreadyLiked = reply.replyLikes.includes(userId);

    if (!alreadyLiked) {
      await Reply.findOneAndUpdate(
        { _id: replyId },
        {
          $push: { replyLikes: userId },
          $pull: { replyDislikes: userId },
        }
      );

      res.status(201).json({ message: "success" });
    } else {
      await Reply.findOneAndUpdate(
        { _id: replyId },
        {
          $pull: { replyLikes: userId },
        }
      );
      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.replyDislikePostController = async (req, res, next) => {
  const { replyId } = req.params;
  const { userId } = req.body;

  try {
    const reply = await Reply.findById(replyId);
    const alreadyDisliked = reply.replyDislikes.includes(userId);

    if (!alreadyDisliked) {
      await Reply.findOneAndUpdate(
        { _id: replyId },
        {
          $push: { replyDislikes: userId },
          $pull: { replyLikes: userId },
        }
      );

      res.status(201).json({ message: "success" });
    } else {
      await Reply.findOneAndUpdate(
        { _id: replyId },
        {
          $pull: { replyDislikes: userId },
        }
      );
      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

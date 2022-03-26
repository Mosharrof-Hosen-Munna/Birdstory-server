const Comment = require("../Models/Comments");
const Profile = require("../Models/Profile");
const Reply = require("../Models/Reply");

exports.replyPostController = async (req, res, next) => {
  const commentId = req.params.commentId;
  const { body, author } = req.body;

  try {
    const newReply = new Reply({
      body,
      author,
      replyLikes: [],
      replyDislikes: [],
    });

    const createdReply = await newReply.save();

    if (createdReply) {
      await Comment.findOneAndUpdate(
        { _id: commentId },
        {
          $push: { replies: createdReply._id },
        }
      );

      const replyAuthor = await Profile.findOne({ user: author });

      res.status(201).json({ createdReply, replyAuthor });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.replyDeleteController = (req, res, next) => {};

const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    body: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentLikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    commentDislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reply",
      },
    ],
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;

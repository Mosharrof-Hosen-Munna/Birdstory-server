// body,author,likes,dislikes,
const { Schema, model } = require("mongoose");

const replySchema = new Schema(
  {
    body: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    replyLikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    replyDislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Reply = model("Reply", replySchema);

module.exports = Reply;

// title, body,author ,thumbnail,tags ,readtime,likes, dislikes, comments
const { Schema, model } = require("mongoose");
// const Comment = require('./Comment')
// const User = require('./User')

const postSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    body: {
      type: String,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    thumbnail: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);
module.exports = Post;

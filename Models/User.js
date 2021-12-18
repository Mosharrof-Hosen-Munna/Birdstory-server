const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    role: String,
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;

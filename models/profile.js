import mongoose from "mongoose";

const postSchama = new mongoose.Schema({
  followers: {
    type: [],
    required: true,
  },
  following: {
    type: [],
    required: true,
  },
  userPicture: {
    type: String,
  },
});

const Post = mongoose.model("posts", postSchama);
export default Post;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
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
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;

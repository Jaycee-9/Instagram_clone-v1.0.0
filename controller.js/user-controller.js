import User from "../models/user.js";

export const userProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Error while getting user information" });
  }
};

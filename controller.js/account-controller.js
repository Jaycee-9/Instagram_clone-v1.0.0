import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../models/token.js";

export const signupUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      fullname: req.body.fullname,
      username: req.body.username,
      password: hashPassword,
    };

    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ msg: "Sign up successfull.", status: 200 });
  } catch (error) {
    res.status(500).json({ msg: "Username or account already already exist." });
  }
};

export const loginUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(404).json({ msg: "User does not exist", status: 404 });
  }

  try {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), process.env.jwtPrivateKey, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.jwtRefreshKey);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        fullname: user.fullname,
        username: user.username,
      });
    } else {
      res.status(400).json({ msg: "Password or username is incorrect" });
    }
  } catch (error) {
    res.status(500).json(error.msg);
  }
};

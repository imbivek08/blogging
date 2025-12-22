import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  var { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All field required"));
  }

  const salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(password, salt);
  const newUser = new User({
    username,
    email,
    password,
  });
  try {
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password || username === "" || password === "") {
    return next(errorHandler(400, "All field are required"));
  }
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return next(errorHandler(400, "User not found"));
    }
    const permit = bcrypt.compareSync(password, user.password);
    if (!permit) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

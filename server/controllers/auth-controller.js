import { User } from "../models/user-model.js";
import argon2 from "argon2";

export const getHomePage = (req, res) => {
  try {
    res.status(200).send("Welcome to Home page");
  } catch (error) {
    console.log(error);
  }
};

export const postRegisterPage = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ userName, email, phone, password });

    res.status(200).json({
      msg: "registration completed",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

export const postLoginPage = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isPasswordValid = await userExist.verifyPassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "internal server error" + error });
  }
};

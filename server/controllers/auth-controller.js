import { User } from "../models/user-model.js";
export const getHomePage = (req, res) => {
  try {
    res.status(200).send("Welcome to Home page");
  } catch (error) {
    console.log(error);
  }
};

export const getRegisterPage = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    await User.create({ userName, email, phone, password });

    res.status(200).json({ data: req.body });
  } catch (error) {
    console.log(error);
  }
};

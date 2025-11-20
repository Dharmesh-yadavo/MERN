import mongoose from "mongoose";
import argon2 from "argon2";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//secure the password with the argon
userSchema.pre("save", async function (next) {
  // console.log("pre method", this);

  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const hash_password = await argon2.hash(user.password);
    console.log("hash_password: ", hash_password);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// defining the model:
export const User = new mongoose.model("User", userSchema);

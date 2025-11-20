import mongoose from "mongoose";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

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
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// verify password
userSchema.methods.verifyPassword = function () {
  return argon2.verify(this.password, password);
};

// jwt token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// defining the model:
export const User = new mongoose.model("User", userSchema);

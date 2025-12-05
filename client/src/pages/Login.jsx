import AnimatedBg from "@/Components/ui/AnimatedBg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import SpinningBG from "@/Components/ui/SpiningBg";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert(responseData.msg);
        // console.log("after login: ", responseData.msg);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AnimatedBg>
        <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
          <div className="justify-center max-w-7xl w-full">
            <div className="justify-center">
              <SpinningBG />
            </div>
            <div className=" text-center">
              <h1 className="font-amiri font-semibold italic text-5xl text-white mt-12 mb-4">
                Log in to your account
              </h1>
              <p className="text-lg text-white ">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Card */}
            <div
              className="relative m-auto mt-10 bg-white/10 backdrop-blur-xl py-6 px-8 rounded-2xl 
          border border-white/20 
          text-white w-[400px] animate-fadeIn "
            >
              <form onSubmit={handleFormSubmit} className="space-y-2">
                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg
                  focus:ring-2 focus:ring-pink-400 focus:border-pink-400 
                  focus:outline-none transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg
                  focus:ring-2 focus:ring-pink-400 focus:border-pink-400
                  focus:outline-none transition duration-200"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Forgot password */}
                <div className="text-right pt-3 ">
                  <NavLink
                    to="/"
                    className="text-pink-400 hover:text-pink-300 text-sm transition"
                  >
                    Forgot password?
                  </NavLink>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-500 
                hover:from-purple-600 hover:to-pink-700 font-semibold 
                py-2.5 rounded-lg shadow-lg transition transform hover:scale-[1.03] active:scale-95"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center pt-2 gap-4 my-6">
                  <div className="h-px flex-1 bg-white/20"></div>
                  <p className="text-sm text-white/60">Or continue with</p>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    className="w-16 h-12 flex items-center justify-center rounded-xl 
               border border-white/20 bg-white/5 hover:bg-white/10 
               transition shadow-sm hover:shadow-md"
                  >
                    <FcGoogle className="text-2xl" />
                  </button>

                  <button
                    className="w-16 h-12 flex items-center justify-center rounded-xl 
               border border-white/20 bg-white/5 hover:bg-white/10 
               transition shadow-sm hover:shadow-md"
                  >
                    <FaGithub className="text-2xl text-white" />
                  </button>
                </div>
              </form>

              {/* Signup link */}
              <p className="text-center mt-6 text-sm text-gray-300">
                Don't have an account?{" "}
                <NavLink
                  to="/signUp"
                  className="text-pink-400 hover:text-pink-300 font-medium transition"
                >
                  Create account
                </NavLink>
              </p>
            </div>
          </div>
        </section>
      </AnimatedBg>
    </>
  );
};

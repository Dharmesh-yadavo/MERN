import AnimatedBg from "@/Components/ui/AnimatedBg";
import SpinningBG from "@/Components/ui/SpiningBg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful");
        setUser({ userName: "", email: "", phone: "", password: "" });
        console.log(responseData);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <AnimatedBg>
        <section className="min-h-screen flex items-center justify-center pt-32 pb-20">
          <div className="justify-center max-w-6xl w-full">
            <div className="justify-center">
              <SpinningBG />
            </div>

            {/* Card */}
            <div
              className="relative m-auto mt-10 bg-white/10 backdrop-blur-xl py-6 px-8 rounded-2xl 
          border border-white/20 
          text-white w-[400px] animate-fadeIn "
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <h1 className="text-center font-semibold italic text-3xl text-white ">
                  Create your account
                </h1>
                {/* UserName */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-semibold">Username</label>
                  <input
                    type="text"
                    name="userName"
                    value={user.userName}
                    onChange={handleInput}
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition placeholder-gray-400"
                    placeholder="Enter your username"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition"
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
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition"
                    placeholder="Create a password"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-500 
                hover:from-purple-600 hover:to-pink-700 font-semibold 
                py-2.5 rounded-lg shadow-lg transition transform hover:scale-[1.03] active:scale-95"
                >
                  Create Account
                </button>

                <p className="text-center mt-6 text-sm text-gray-300">
                  Already have an account? <span> </span>
                  <NavLink
                    to="/login"
                    className="text-pink-400 hover:text-pink-300 font-medium transition"
                  >
                    Sign in
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </section>
      </AnimatedBg>
    </>
  );
};

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="flex justify-center max-w-7xl w-full">
          {/* Card */}
          <div
            className="relative bg-white/10 backdrop-blur-xl p-10 rounded-2xl 
          shadow-[0px_0px_60px_rgba(140,0,255,0.2)] border border-white/20 
          text-white w-[380px] animate-fadeIn"
          >
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-6 tracking-wide text-purple-400">
              Welcome Back 👋
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg
                  focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
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
                  focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                  focus:outline-none transition duration-200"
                  placeholder="Enter your password"
                />
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <NavLink
                  to="/"
                  className="text-purple-300 hover:text-purple-400 text-sm transition"
                >
                  Forgot password?
                </NavLink>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-purple-600 
                hover:from-purple-600 hover:to-purple-700 text-white font-semibold 
                py-3 rounded-lg shadow-lg transition transform hover:scale-[1.03] active:scale-95"
              >
                Login
              </button>
            </form>

            {/* Signup link */}
            <p className="text-center mt-6 text-sm text-gray-300">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-purple-400 hover:text-purple-300 font-medium transition"
              >
                Create account
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

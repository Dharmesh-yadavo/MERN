import React, { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center ">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/images/register.png"
              alt="Register Illustration"
              className="w-[500px] md:w-[550px] "
            />
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white-400 text-white ">
            <h1 className="text-3xl font-bold mb-6 uppercase tracking-wider text-center ">
              Registration Form
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
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

              {/* Phone */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition"
                  placeholder="Enter your phone number"
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
                className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold 
                py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02] active:scale-100"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

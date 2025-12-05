import AnimatedBg from "@/Components/ui/AnimatedBg";
import SpinningBG from "@/Components/ui/SpiningBg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("response: ", response);
      // alert(response);

      if (response.ok) {
        setContact({ userName: "", email: "", message: "" });
        const responseData = await response.json();
        alert(responseData);
        console.log(responseData);
      } else {
        // Handle API error here
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AnimatedBg>
        <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
          <div className="justify-center max-w-6xl w-full">
            <div className="justify-center">
              <SpinningBG />
            </div>

            <div className=" text-center">
              <h1 className="font-amiri font-semibold italic text-5xl text-white mt-12 mb-4">
                Contact Form
              </h1>
            </div>

            {/* Card */}
            <div
              className="relative m-auto mt-10 bg-white/10 backdrop-blur-xl py-6 px-8 rounded-2xl 
          border border-white/20 
          text-white w-[500px] animate-fadeIn "
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* UserName */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-semibold">Username</label>
                  <input
                    type="text"
                    name="userName"
                    value={contact.userName}
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
                    value={contact.email}
                    onChange={handleInput}
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-md font-semibold pb-2">
                    Message :
                  </label>
                  <textarea
                    name="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required
                    cols="30"
                    rows="4"
                    placeholder="Enter your message"
                    className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition placeholder-gray-400"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-500 
                hover:from-purple-600 hover:to-pink-700 font-semibold 
                py-2.5 rounded-lg shadow-lg transition transform hover:scale-[1.03] active:scale-95"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedBg>
    </>
  );
};

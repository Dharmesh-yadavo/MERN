import React, { useState } from "react";

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
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center ">
            <img
              src="public/images/contact.png"
              alt=""
              className="w-[500px] md:w-[550px] h-[650px] "
            />
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-10 shadow-2xl rounded-xl border border-white-400 ">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold mb-6 uppercase tracking-wider text-center">
                Contact Form
              </h1>
              {/* usernme */}
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
              {/* email */}
              <div className="flex flex-col">
                <label className="text-md font-semibold pb-2">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/20 px-4 py-2 rounded-lg focus:ring-2 
                  focus:ring-purple-400 focus:outline-none transition placeholder-gray-400"
                />
              </div>
              {/* message */}
              <div className="flex flex-col">
                <label className="text-md font-semibold pb-2">Message :</label>
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
              <button
                type="submit"
                className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold 
                py-3 rounded-lg shadow-lg transition transform hover:scale-[1.02] active:scale-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

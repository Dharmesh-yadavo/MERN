import { NavLink } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/service", label: "Service" },
    { id: "/contact", label: "Contact" },
  ];

  const followUs = [
    { id: 1, to: "/", label: "Instagram" },
    { id: 2, to: "/", label: "LinkedIn" },
    { id: 3, to: "/", label: "GitHub" },
    { id: 4, to: "/", label: "Twitter" },
  ];
  return (
    <>
      <footer className="py-10 mt-10 border-t-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Brand */}
          <div className="">
            <h2 className="text-2xl font-medium">MERN</h2>
            <p className="text-gray-500">
              A modern MERN stack application for learning and exploring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            {quickLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className="text-gray-500 font-bold flex "
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            {followUs.map((item, index) => (
              <NavLink
                key={index}
                to={item.id}
                className="text-gray-500 font-bold flex "
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

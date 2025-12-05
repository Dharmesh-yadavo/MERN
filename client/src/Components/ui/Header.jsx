import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const navigationItems = [
    { id: "/courses", label: "Courses" },
    // { id: "/pricing", label: "Pricing" },
    { id: "/blog", label: "Blog" },
    { id: "/contact", label: "Contact" },
  ];

  const navigationButtons = [
    { id: "/login", label: "Login" },
    { id: "/signUp", label: "Sign-up" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-20 mt-4 ">
        <nav className="max-w-2xl mx-auto flex items-center justify-between p-4 border rounded-xl bg-white">
          {/* Skillera Logo/Navlink */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-black uppercase">
              Skillera
            </NavLink>
          </div>

          {/* Navigation Links (Flex) */}
          <div className="flex space-x-6 items-center">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className="text-m font-semibold flex items-center gap-1 overflow-visible"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Navigation Buttons (Talk to us / Login / Signup) */}
          <div className="flex space-x-0">
            {navigationButtons.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                // Apply the main button styles to the NavLink
                className="group flex items-center space-x-2 py-2 px-4 text-m font-semibold transition"
              >
                {/* 1. The Text Label */}
                <span className="shrink-0 hover:translate-y-[-1px]">
                  {item.label}
                </span>

                {/* 2. The Pink Circular Icon */}
                {/* Apply the circular pink background and text color to the icon */}
                <ArrowUpRight className="w-7 h-7 bg-pink-300 p-1.5 rounded-full transition duration-300 ease-in-out group-hover:translate-y-[-1px] group-hover:bg-black group-hover:text-white group-hover:rotate-45" />
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

import { NavLink } from "react-router-dom";

export const Header = () => {
  const navigationItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/service", label: "Service" },
    { id: "/contact", label: "Contact" },
    { id: "/register", label: "Register" },
    { id: "/login", label: "Login" },
  ];

  return (
    <>
      <header className="">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-purple-600">
            <h1>MERN</h1>
          </NavLink>

          {/* NavLinks */}
          <div className="flex space-x-6">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-purple-500 underline" : "text-gray-700"
                  } hover:text-purple-600  transition `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

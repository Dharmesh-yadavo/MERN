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
    { id: "/signup", label: "Sign-up" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-10 mt-4 ">
        <nav className="max-w-2xl mx-auto flex items-center justify-between p-4 border rounded-xl  bg-white">
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
                className="text-m font-semibold"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Navigation Buttons (Talk to us / Login / Signup) */}
          <div className="flex space-x-4">
            {navigationButtons.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                // You can style these to look like the 'Talk to us' button
                // from the MARROW site, which has a pink background.
                className="text-m font-semibold "
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

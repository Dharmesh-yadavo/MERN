import { Outlet } from "react-router-dom";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const AppLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

import { Outlet } from "react-router-dom";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";
import { Home } from "../../pages/Home";

export const AppLayout = () => {
  return (
    <div className=" text-black font-roboto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

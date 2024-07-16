import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavHeader from "../Nav_Header/NavHeader";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <NavHeader />
      <Navbar />
      <div className="md:mt-[6rem] mt-[11.8rem]">{<Outlet />}</div>
      <Footer />
    </>
  );
};

export default Layout;

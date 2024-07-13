import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaClock, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NavHeader = () => {
  return (
    <>
      <div className="flex justify-between md:flex-nowrap flex-wrap  text-white text-lg fixed top-0 z-50 w-full">
        <div className="bg-dark w-full md:pl-14 pl-4 py-2">
          <p className="flex items-center gap-3">
            <PiPhoneCallFill />
            <span>Call for Order : +231 767 235 135</span>
          </p>
        </div>
        <div className="bg-primary w-full flex items-center md:gap-12 gap-y-2 gap-x-8 md:px-8 px-4 py-2 flex-wrap md:border-l-4 border-white">
          <p className="flex items-center gap-3">
            <IoMdMail />
            <span>example@gmail.com</span>
          </p>
          <p className="flex items-center gap-3">
            <FaClock /> <span>Bong County, Liberia</span>
          </p>
          <div className="flex items-center gap-4">
            <FaFacebookSquare />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;

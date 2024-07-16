import { Link } from "react-router-dom";

const text = `Cashew provides a livelihood for over 300,000 households and sustains 600,000 jobs across the value chain activities as harvesters, transporters, processors, marketers, and exporters.`;

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 bg-dark text-white py-16 md:px-12 px-6 md:gap-8 gap-y-10 ">
        <div className="">
          <h1 className="text-3xl font-bold pb-4 capitalize">
            About <span className="text-primary">Naa-Kaai-kai</span>
          </h1>

          <p className="text-lg">{text}</p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold pb-4">Contact Us</h1>
          <ul className="flex flex-col">
            <li className="text-lg hover:text-primary pb-2">
              Bong, County Liberia
            </li>
            <li className="text-lg hover:text-primary pb-2">
              (+231) 123 456 789
            </li>
            <li className="text-lg hover:text-primary pb-2">steve@gmail.com</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold pb-4">Quick Links</h1>
          <ul className="flex flex-col">
            <Link to="/" className="text-lg hover:text-primary pb-2">
              Home
            </Link>
            <Link to="/about" className="text-lg hover:text-primary pb-2">
              About
            </Link>
            <Link to="/service" className="text-lg hover:text-primary pb-2">
              Services
            </Link>
            <Link to="/contact" className="text-lg hover:text-primary pb-2">
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

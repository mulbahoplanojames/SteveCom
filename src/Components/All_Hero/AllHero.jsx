import { Link } from "react-router-dom";

const AllHero = ({ text, title }) => {
  return (
    <>
      <div className="md:px-10 px-4 md:py-32 py-14 text-white" id="about_hero">
        <h1 className="md:text-6xl text-4xl  md:pb-5 pb-4  text-center">
          {title}
        </h1>

        <div className="text-xl text-center">
          <Link to="/" className="inline-block pr-3 border-r-2 border-white">
            Home
          </Link>{" "}
          <span className="inline-block pl-3">{text}</span>
        </div>
      </div>
    </>
  );
};

export default AllHero;

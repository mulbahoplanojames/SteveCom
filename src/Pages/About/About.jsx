import AboutDetails from "../../Components/About_Details/AboutDetails";
import DetailsTwo from "../../Components/About_Details/DetailsTwo";
import AllHero from "../../Components/All_Hero/AllHero";

const About = () => {
  return (
    <>
      <AllHero title="About Us" text={"About"} />
      <AboutDetails />
      <DetailsTwo />
    </>
  );
};

export default About;

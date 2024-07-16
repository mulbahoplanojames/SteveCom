import AboutDetails from "../../Components/About_Details/AboutDetails";
import DetailsTwo from "../../Components/About_Details/DetailsTwo";
import AllHero from "../../Components/All_Hero/AllHero";
import Gallery from "../../Components/Gallery/Gallery";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const About = () => {
  return (
    <>
      <AllHero title="About Us" text={"About"} />
      <AboutDetails />
      <DetailsTwo />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default About;

import AboutDetails from "../../Components/About_Details/AboutDetails";
import DetailsTwo from "../../Components/About_Details/DetailsTwo";
import AboutFounder from "../../Components/About_Founder/AboutFounder";
import AllHero from "../../Components/All_Hero/AllHero";
import CommunityWork from "../../Components/Community_Work/CommunityWork";
import FAQ from "../../Components/FAQ/FAQ";
import Gallery from "../../Components/Gallery/Gallery";
import HomeAbout from "../../Components/Home_About/HomeAbout";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const About = () => {
  return (
    <>
      <AllHero title="About Us" text={"About"} />
      <HomeAbout text={"About Us"} />
      <AboutDetails />
      <DetailsTwo />
      <Gallery />
      <AboutFounder />
      <CommunityWork />
      <FAQ />
      <NewsLetter />
    </>
  );
};

export default About;

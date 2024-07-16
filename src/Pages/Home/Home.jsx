import { useState } from "react";
import HomeAbout from "../../Components/Home_About/HomeAbout";
import HomeHero from "../../Components/Home_Hero/HomeHero";
import HomeServices from "../../Components/Home_Services/HomeServices";
import FruitDsiplay from "../../Components/Fruit_Display/FruitDisplay";
import WhyChooseUs from "../../Components/Why_Choose_Us/WhyChooseUs";
import Farmers from "../../Components/Our_Farmers/Farmers";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import ContactUsForm from "../../Components/ContactUs_Form/ContactUsForm";
import Gallery from "../../Components/Gallery/Gallery";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HomeHero />
      <HomeAbout text={"Welcome"} />
      {/* <HomeServices /> */}
      <Farmers />
      <Gallery />
      <FruitDsiplay
        category={category}
        text={"Top Oranges and Fruits near you"}
      />
      <WhyChooseUs />
      <NewsLetter />
      <ContactUsForm />
    </>
  );
};

export default Home;

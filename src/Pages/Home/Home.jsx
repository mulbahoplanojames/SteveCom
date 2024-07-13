import { useState } from "react";
import FoodDsiplay from "../../Components/Food_Display/FoodDisplay";
import HomeAbout from "../../Components/Home_About/HomeAbout";
import HomeHero from "../../Components/Home_Hero/HomeHero";
import HomeServices from "../../Components/Home_Services/HomeServices";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <FoodDsiplay category={category} />
    </>
  );
};

export default Home;

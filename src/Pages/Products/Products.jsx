import { useState } from "react";
import AllHero from "../../Components/All_Hero/AllHero";
import FruitDsiplay from "../../Components/Fruit_Display/FruitDisplay";

const Products = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <AllHero title="Organic Shop of 30%" text={"Shop"} />
      <FruitDsiplay category={category} text={"Top Products"} />
    </>
  );
};

export default Products;

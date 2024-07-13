/**
 ** Importing the useContext hook from the React library. This hook allows us to access
 ** the fruit_list array in the storeContext. We will use this array in the context
 ** to display the food items.
 */
import { useContext } from "react";

// Importing the storeContext from the StoreContext file. This context provides the fruit_list array
// that i am  using to display the food items.
import { storeContext } from "../../Context/StoreContaxt";

// Importing the FoodCard component from the Food_Card folder. This component is responsible for
// displaying each individual food item.
import FruitCard from "../Fruit_Card/FruitCard";

const FruitDsiplay = ({ category }) => {
  // Using the useContext hook to access the fruit_list array from the storeContext.
  const { fruit_list } = useContext(storeContext);

  return (
    <>
      <div className="mt-20 mb-20 md:px-14 px-6">
        <h1 className="pb-6 text-3xl font-semibold">
          Top Oranges and Fruits near you
        </h1>

        {/* Adding a grid layout with 4 columns for large devices, 2 columns for medium devices, 
             and a single column for small devices. The items in the grid are centered both 
             vertically and horizontally. */}
        <div className="lg:grid-cols-4 md:grid-cols-2 place-items-center grid grid-cols-1 gap-8">
          {/* Mapping through the fruit_list array and rendering a FoodCard component for each item. 
               The key prop is set to the index of the item in the array. */}
          {fruit_list.map((foodItem, i) => {
            if (category === "All" || category === foodItem.category) {
              return (
                <FruitCard
                  key={i}
                  // Passing the name, image, price, description, and category of the food item as props
                  // to the FoodCard component.
                  id={foodItem._id}
                  name={foodItem.name}
                  image={foodItem.image}
                  price={foodItem.price}
                  description={foodItem.description}
                  cateory={foodItem.category}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

// Exporting the FoodDisplay component so that it can be used in other parts of the application.
export default FruitDsiplay;

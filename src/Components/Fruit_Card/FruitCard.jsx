// Import the necessary dependencies
import { useContext } from "react";
import { storeContext } from "../../Context/StoreContaxt";

import add_icon_white from "/src/assets/add_icon_white.png";
import add_icon_green from "/src/assets/add_icon_green.png";
import remove_icon_red from "/src/assets/remove_icon_red.png";
import rating_star from "/src/assets/rating_starts.png";

const FruitCard = (props) => {
  // Destructuring the props to get the necessary data
  const { id, name, image, price, description, cateory } = props;

  // Get the cartItems, addToCart, and removeFromCart functions from the storeContext
  const { cartItems, addToCart, removeFromCart } = useContext(storeContext);

  return (
    <>
      <div className="shadow-md rounded-xl m-auto overflow-hidden h-fit">
        {/* Wrap the image in a div with specific styles */}
        <div className="relative">
          {/* Display the image */}
          <img
            src={image}
            alt={`${cateory} image`}
            className="w-full md:h-[13rem] h-[16rem]"
          />
          {
            /* Conditionally render the add to cart button or the counter wrapper */
            !cartItems[id] ? (
              // If the food item is not in the cart, display the add to cart button
              <img
                src={add_icon_white}
                alt="add_to_cart"
                className="w-[40px] h-[40px] cursor-pointer absolute bottom-4 right-4"
                onClick={() => addToCart(id)}
              />
            ) : (
              // If the food item is in the cart, display the counter wrapper
              <div className="flex items-center gap-3 absolute bottom-4 right-4 bg-white rounded-full p-2">
                {/* Display the remove from cart button */}
                <img
                  src={remove_icon_red}
                  alt="remove_from_cart"
                  onClick={() => removeFromCart(id)}
                  className="w-[28px] h-[28px] cursor-pointer "
                />
                {/* Display the count of the food item in the cart */}
                <p>{cartItems[id]}</p>
                {/* Display the added to cart button */}
                <img
                  src={add_icon_green}
                  alt="added_to_cart"
                  className="w-[28px] h-[28px] cursor-pointer "
                  onClick={() => addToCart(id)}
                />
              </div>
            )
          }
        </div>

        {/* Wrap the food info  */}
        <div className="px-3 py-5">
          <div className="flex justify-between items-center mb-2">
            {/* Display the name of the food item */}
            <p className="font-bold">{name}</p>
            {/* Display the rating starts image */}
            <img src={rating_star} alt="" className="w-[80px]" />
          </div>
          {/* Display the description of the food item */}
          <p className="text-[14px] pb-3 text-text_light">{description}</p>
          {/* Display the price of the food item */}
          {/* <p className="text-lg text-accent_light font-bold">${price}</p> */}
        </div>
      </div>
    </>
  );
};

// Export the FruitdCard component
export default FruitCard;

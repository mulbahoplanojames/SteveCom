const HomeHero = () => {
  return (
    <>
      <div className="md:px-10 px-4 md:py-20 py-9 text-white" id="home_hero">
        <span className="bg-primary p-2 rounded-lg md:mb-8 mb-5 inline-block">
          Welcome to SteveCom
        </span>
        <h1 className="md:text-5xl text-4xl md:pr-[50rem] pr-10 md:pb-5 pb-4 ">
          Health in Life for Organic in Oranges
        </h1>
        <p className="md:text-lg text-base md:pr-[45rem] md:mb-8 pl-3 mb-5 border-l-4 border-primary">
          We provide healthy organic Oranges to help you live a healthy life. We
          care about your health. Our Fruits and Vegetables are organic.
        </p>

        <div className="">
          <button className="py-2 px-4 rounded-md bg-primary text-lg hover:bg-black transition-all duration-300">
            Buy Now
          </button>
          <button className="py-2 px-4 rounded-md bg-transparent border-2 border-white text-lg ml-5 hover:bg-black hover:border-transparent transition-all duration-300">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeHero;

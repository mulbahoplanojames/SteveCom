const HomeHero = () => {
  return (
    <>
      <div className="md:px-10 px-4 md:py-20 py-9 text-white" id="home_hero">
        <span className="bg-primary p-2 rounded-lg md:mb-8 mb-5 inline-block">
          Welcome to Naa-Kaai-Kai Enterprise
        </span>
        <h1 className="md:text-5xl text-4xl md:pr-[40rem] pr-3 md:pb-5 pb-4 ">
          Empowering Farmers through Cashew Farming
        </h1>
        <p className="md:text-lg text-base md:pr-[45rem] md:mb-8 pl-3 mb-5 border-l-4 border-primary">
          Cashew provides a livelihood for over 300,000 households and sustains
          600,000 jobs across the value chain activities as harvesters,
          transporters, processors, marketers, and exporters.
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

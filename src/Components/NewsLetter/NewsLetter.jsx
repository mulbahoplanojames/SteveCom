const NewsLetter = () => {
  return (
    <>
      <form className="bg-gray px-10 md:py-24 py-14 flex items-center md:flex-nowrap flex-wrap">
        <h1 className="md:text-4xl text-3xl font-bold w-full pb-3 md:pb-0 md:text-left text-center">
          Subcribe Today of Newletter
        </h1>
        <div className="w-full   mt-4 flex md:flex-nowrap flex-wrap md:gap-3 gap-y-3">
          <input
            type="email"
            className="w-full h-[7vh] bg-transparent border-2 border-black outline-none rounded text-lg p-4"
          />
          <button
            className="text-white md:w-[30%] w-full bg-black rounded text-lg md:py-1 md:px-4 py-3"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
};

export default NewsLetter;

const HomeAbout = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-10">
        <div className="w-full h-fit">
          <p className="font-semibold text-primary text-lg pb-4">
            Welcome to Steve Com
          </p>
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[50rem]">
            We Provide For Health High Quilty Food In Servces
          </h1>
          <p className="text-base pb-8 font-semibold md:pr-[40rem]">
            Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed
            eiusmod tempor sit amet elit dolor sit amet elit.Lorem ipsum dolor
            sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet
            elit.
          </p>

          {/* card 1 */}
          <div className="flex gap-3 mb-10 ">
            <div className="md:w-[6rem] w-[14rem] h-[7rem] bg-primary text-white rounded-md"></div>
            <div className="">
              <h1 className="md:text-2xl pb-3 text-lg font-bold">
                Natural Oranges
              </h1>
              <p className="md:text-xl text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                magnam quod error ullam, rerum nisi?
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-6 ">
            <div className="md:w-[6rem] w-[14rem] h-[7rem] bg-primary text-white rounded-md"></div>
            <div className="">
              <h1 className="md:text-2xl pb-3 text-lg font-bold">
                High Quilty Oranges
              </h1>
              <p className="md:text-xl text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                magnam quod error ullam, rerum nisi?
              </p>
            </div>
          </div>

          {/* card 2 */}
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

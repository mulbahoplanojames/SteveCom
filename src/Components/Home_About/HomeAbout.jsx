import { GiOrange } from "react-icons/gi";
import { PiOrangeFill } from "react-icons/pi";
import imageabout from "/src/assets/cashew1.png";
const HomeAbout = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-4 place-items-center">
        <div className="w-full h-fit">
          <p className="font-semibold text-primary text-lg pb-4">
            Welcome to Steve Com
          </p>
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[9rem]">
            We Provide For Health High Quilty Cashew In Servces
          </h1>
          <p className="text-base pb-8  md:pr-[6rem]">
            At our company, we are committed to supplying premium quality
            cashews specifically tailored for the health services sector. Our
            cashews are carefully sourced and rigorously processed to ensure the
            highest standards of quality and safety.
          </p>

          {/* card 1 */}
          <div className="flex gap-4 mb-10 ">
            <div className="md:w-[5em] w-[11rem] h-[6rem] bg-primary text-white rounded-md flex justify-center items-center">
              <GiOrange className="text-5xl" />
            </div>
            <div className="">
              <h1 className="md:text-2xl pb-3 text-lg font-bold">
                Natural Oranges
              </h1>
              <p className=" text-base md:pr-40">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                magnam quod.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex gap-4 mb-6 ">
            <div className="md:w-[5rem] w-[11rem] h-[6rem] bg-primary text-white rounded-md flex justify-center items-center">
              <PiOrangeFill className="text-5xl" />
            </div>
            <div className="">
              <h1 className="md:text-2xl pb-3 text-lg font-bold">
                High Quilty Oranges
              </h1>
              <p className=" text-base md:pr-40 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                magnam quod error.
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------   */}
        <div className="w-full overflow-hidden">
          <img src={imageabout} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

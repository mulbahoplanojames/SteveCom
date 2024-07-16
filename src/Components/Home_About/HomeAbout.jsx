import { GiOrange } from "react-icons/gi";
import { PiOrangeFill } from "react-icons/pi";
import imageabout from "/src/assets/cashew1.jpg";

const text1 = `Cashew has been cultivated primarily for its food and medicinal importance, which involves the use of whole cashew fruit, i.e., the apple, kernel as well as a nut for various industrial purposes. Currently, there is a huge market for cashew products. estimated the global value of the cashew market in 2017 to be in the neighbourhood of US $5.26 billion. Although it is difficult to assess the exact production outputs in the various cashew-producing countries, the estimate, shows that the output of raw cashew nuts (RCN) which stood at 0.29 million tonnes in 1961, grew to 2.60 million tonnes in 2013 and later rose to 4.9 million tonnes in 2016. `;

const text2 = `At the continental level, African countries contribute 56.5% to the global cashew output while Asian countries account for approximately 44% in 2018. The share of West Africa in cashew production has also risen over the years to 1.62 million tonnes representing 42% of world cashew output in 2017. This makes West Africa the leading cashew-producing region in the world. However, Liberia has been unable to be a direct beneficiary of this statistics, so the Naa-Kaai-Kai Enterprise is here to train farmers in Cashew farming and providing them with the seeding needed to start the nation’s sustainable economic empowerment program.`;

const HomeAbout = ({ text }) => {
  return (
    <>
      <div className="md:px-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-4 place-items-center">
        <div className="w-full h-fit">
          <span className="bg-primary p-2 rounded-lg md:mb-8 mb-5 inline-block  font-bold text-white">
            {text} Naa-Kaai-Kai Enterprise
          </span>
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[9rem]">
            Economic viability of value-added cashew
          </h1>
          <p className="text-base pb-8  md:pr-[5rem]">{text1}</p>
          <p className="text-base pb-8  md:pr-[5rem]">{text2}</p>

          {/* card 1 */}
          {/* <div className="flex gap-4 mb-10 ">
            <div className="md:w-[5em] w-[11rem] h-[6rem] bg-primary text-white rounded-md flex justify-center items-center">
              <GiOrange className="text-5xl" />
            </div>
            <div className="">
              <h1 className="md:text-2xl pb-3 text-lg font-bold">
                Natural Cashew
              </h1>
              <p className=" text-base md:pr-40">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                magnam quod.
              </p>
            </div>
          </div> */}

          {/* card 2 */}
          {/* <div className="flex gap-4 mb-6 ">
            <div className="md:w-[5rem] w-[11rem] h-[6rem] bg-primary text-white rounded-md flex justify-center items-center">
              <PiOrangeFill className="text-5xl" />
            </div>
            <div className="">
              <h1 className="md:text-2xl pb-3 text-lg font-bold">
                High Quilty Cashew
              </h1>
              <p className=" text-base md:pr-40 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                magnam quod error.
              </p>
            </div>
          </div> */}
        </div>
        {/* ---------------------   */}
        <div className="w-full overflow-hidden md:h-[40rem]">
          <img src={imageabout} alt="" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

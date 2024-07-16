// import { GiOrange } from "react-icons/gi";
// import { PiOrangeFill } from "react-icons/pi";
import textOne, {
  textFive,
  textFour,
  textSix,
  textThree,
  textTwo,
} from "../../Constant/Constant";
import imageabout from "/src/assets/cashew1.png";
const AboutDetails = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-10 grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-y-4 place-items-center md:mb-14 mb-1 md:mt-5 mt-1">
        <div className="w-full h-fit">
          <h1 className=" md:pb-6 pb-4 text-3xl font-bold md:pr-[2rem]">
            The economic importance of Cashew production in national development
          </h1>
          <ul className="list-disc pl-6 md:pr-0 pr-2">
            <li className="text-base pb-4 md:pr-[10rem]">{textOne}</li>
            <li className="text-base pb-4 md:pr-[10rem]">{textTwo}</li>
            <li className="text-base pb-4 md:pr-[10rem]">{textThree}</li>
          </ul>
        </div>

        <div className="w-full h-fit">
          <h1 className=" md:pb-6 pb-4 text-3xl font-bold ">
            The cashew role play in rural development, and contribution to
            global trade.
          </h1>
          <ul className="list-disc pl-6">
            <li className="text-base pb-4 md:pr-[10rem]">{textFour}</li>
            <li className="text-base pb-4 md:pr-[10rem]">{textFive}</li>
            <li className="text-base pb-4 md:pr-[10rem]">{textSix}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutDetails;

import image1 from "/src/assets/img1.jpg";
import image2 from "/src/assets/img3.jpg";
import image3 from "/src/assets/img2.jpg";
import image4 from "/src/assets/img4.jpg";

const text1 = ` At our company, we are committed to supplying premium quality
            cashews specifically tailored for the health services sector. Our
            cashews are carefully sourced and rigorously processed to ensure the
            highest standards of quality and safety. . Recognizing the
            nutritional benefits of cashews, we aim to provide health
            institutions with a reliable source of these nutritious nuts,
            supporting their mission to promote better health and well-being`;

const text2 = `We are dedicated to supplying premium quality cashew training programs to our farmer institutions and health services. Our training initiatives are designed to enhance the skills and knowledge of cashew farmers, ensuring they can produce the highest quality nuts. By providing comprehensive training on best practices in cultivation, harvesting, and processing, we empower farmers to improve their yields and product quality.

`;

const DetailsTwo = () => {
  return (
    <>
      <div className="md:px-10 px-4 pb-10 md:pb-14 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-10 place-items-center">
        <div className="w-full h-fit">
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[9rem]">
            We Supply Premium Quality Cashews for Health Services
          </h1>
          <p className="text-base pb-8  md:pr-[5rem]">{text1}</p>
        </div>
        {/* ---------------------   */}
        <div className="w-full md:w-[80%] h-[20rem] relative md:order-last order-first">
          <div className="absolute top-0 left-0 bg-red-400 w-[20rem] h-[13rem] overflow-hidden">
            <img
              src={image1}
              alt={image1}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-400 w-[20rem] h-[13rem]">
            <img
              src={image2}
              alt={image2}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ======================================================================================== */}
      <div className="md:px-10 px-4 pb-10 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-10 place-items-center">
        <div className="w-full md:w-[80%] h-[20rem] relative md:mt-20 order-first">
          <div className="absolute top-0 left-0 bg-red-400 w-[20rem] h-[13rem] overflow-hidden">
            <img
              src={image4}
              alt={image4}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-400 w-[20rem] h-[13rem]">
            <img
              src={image3}
              alt={image3}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full h-fit">
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[9rem]">
            We Supply Premium Quality Cashews Tranings to Our farmer
            Institutions and Health Services
          </h1>
          <p className="text-base pb-8  md:pr-[5rem]">{text2}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsTwo;

import image1 from "/src/assets/img1.jpg";
import image2 from "/src/assets/img3.jpg";
import image3 from "/src/assets/img2.jpg";
import image4 from "/src/assets/img4.jpg";

const text1 = `Though, cashew (Anacardium occidentale L.), is an exotic horticultural crop brought to
 Liberia by travellers but now adapted well in the Liberian climatic conditions. It has been grown in the country with little ideas for many farmers Due to its high nutritional value and increasing affordability by the consumers, demand
 for cashew continues to increase in foreign countries with a deadlock in Liberia. There is a wide gap between potential productivity and present production.
 The major factors for low productivity are:`;

const text2 = `Choose the right cashew varieties that are well-adapted to the local conditions.  For commercial purposes, selecting the dwarf varieties is key to maximizing yield and quality products for the market. This may involve consulting with agricultural experts or research institution and established Cashew farm in the region. A medium nut types with high yield are recommended for cultivation in cashew farm for economic purposes. These varieties shown better yield performance in other cashew growing regions of the world as well. `;

const DetailsTwo = () => {
  return (
    <>
      <div className="md:px-10 px-4 pb-10 md:pb-14 grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-10 place-items-center">
        <div className="w-full h-fit">
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[9rem] capitalize">
            cashew (Anacardium occidentale L.)
          </h1>
          <p className="text-base pb-3  md:pr-[5rem]">{text1}</p>
          <ul className="list-disc pl-6">
            <li className="text-base pb-4">
              Land Tenure System in the Country
            </li>
            <li className="text-base pb-4">Lack of knowledge by Farmers</li>
            <li className="text-base pb-4">
              No information on Cashew production in Liberia
            </li>
            <li className="text-base pb-4">
              Lack of large Cashew plantation in the region
            </li>
          </ul>
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
          <h1 className="md:text-4xl md:pb-6 pb-4 text-3xl font-bold md:pr-[9rem] capitalize">
            Varieties selection
          </h1>
          <p className="text-base pb-8  md:pr-[5rem]">{text2}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsTwo;

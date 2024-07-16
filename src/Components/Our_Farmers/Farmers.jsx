import { farmerData } from "../../Data/Data";

const Farmers = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-10 mt-8 mb-16">
        <p className="text-primary text-lg pb-3 uppercase font-bold">
          Our Farmers
        </p>
        <h1 className="md:text-4xl text-3xl font-bold">Organic Meet Farmer</h1>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-y-8 mt-8">
          {farmerData.map((farmer) => (
            <div
              className="w-full bg-white hover:rounded-lg group  shadow-lg rounded-lg overflow-hidden text-black"
              key={farmer.id}
            >
              <div className="w-full md:h-[20rem] h-[17rem]  overflow-hidden">
                <img
                  src={farmer.image}
                  alt=""
                  className="w-full h-full  group-hover:scale-110 transition-all duration-300"
                />
              </div>

              <div className=" rounded-md">
                <h1 className="md:text-xl text-lg font-bold px-2 pt-4 pb-2">
                  {farmer.name}
                </h1>
                <p className=" text-base px-2  pb-4">{farmer.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Farmers;

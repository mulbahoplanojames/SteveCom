import { homeServicesData } from "../../Data/Data";

const HomeServices = () => {
  return (
    <>
      <div className="md:px-10 px-4 mt-8 py-10 bg-gray mb-10">
        <p className="font-semibold text-primary text-lg pb-3">Our Service</p>
        <h1 className="md:text-4xl text-3xl font-bold pb-8">What We Do</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-6">
          {homeServicesData.map((service) => (
            <div className="w-full bg-white rounded-md" key={service.id}>
              <div className="w-full md:h-[15rem] h-[12rem] overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="md:text-2xl text-lg font-bold px-3 pt-6 pb-4">
                {service.title}
              </h1>
              <p className=" text-base px-3  pb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeServices;

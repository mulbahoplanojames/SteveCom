import { contactUsCardData } from "../../Data/Data";

const ContactUsCard = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-6 mb-6">
        {contactUsCardData.map((card) => (
          <div className="" key={card.id}>
            <div className="w-full h-fit text-center bg-white rounded-md shadow-md shadow-slate-400">
              <div className="w-[50%] mx-auto h-fit overflow-hidden   flex justify-center items-center py-4 text-4xl text-primary">
                {card.icon}
              </div>
              <p className="font-semibold text-primary text-lg pb-1 pt-3">
                {card.title}
              </p>
              <h1 className=" md:pb-6 pb-4 text-2xl font-bold ">
                {card.label}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactUsCard;

import { communityData } from "../../Data/assets";

const CommunityWork = () => {
  return (
    <>
      <div className="md:mt-8  md:px-10 px-4 mb-20">
        <p className="text-primary text-lg pb-3 uppercase font-bold">
          Community Work
        </p>
        <h1 className="md:text-4xl text-3xl font-bold pb-7 ">
          Working with communities to build their capacity and skills and to see
          them working with their own hands is indeed an accomplishment.
        </h1>

        <div className="">
          {communityData.map((data) => (
            <div className="md:px-32" key={data.id}>
              <div className="flex flex-col justify-between gap-2">
                <img
                  src={data.image}
                  alt={data.text}
                  className="border-2 border-primary"
                />
                <p className="pb-10 md:text-2xl text-xl">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunityWork;

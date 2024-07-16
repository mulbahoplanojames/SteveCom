import image1 from "/src/assets/img1.jpg";
import image2 from "/src/assets/img2.jpg";
import image3 from "/src/assets/img11.jpg";
import image4 from "/src/assets/img4.jpg";
import image5 from "/src/assets/img5.jpg";
import image6 from "/src/assets/img13.jpg";
import image7 from "/src/assets/img7.jpg";
import image8 from "/src/assets/img12.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="md:mt-24  md:px-10 px-4 mb-20">
        <h1 className="md:text-4xl text-3xl font-bold pb-8">Our Gallery</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-6 gap-y-6 gap-x-2">
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden col-span-2">
            <img
              src={image1}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-blue-200 rounded-md overflow-hidden col-span-2">
            <img
              src={image3}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-purple-200 rounded-md overflow-hidden col-span-2">
            <img
              src={image2}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-slate-200 rounded-md overflow-hidden">
            <img
              src={image4}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden">
            <img
              src={image5}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden">
            <img
              src={image6}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-slate-200 rounded-md overflow-hidden">
            <img
              src={image7}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden col-span-2">
            <img
              src={image8}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

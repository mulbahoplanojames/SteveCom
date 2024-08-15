import image1 from "/src/assets/img1.jpg";
import image2 from "/src/assets/img2.jpg";
import image3 from "/src/assets/img11.jpg";
import image4 from "/src/assets/img4.jpg";
import image5 from "/src/assets/img5.jpg";
import image6 from "/src/assets/img13.jpg";
import image7 from "/src/assets/img14.jpg";
import image8 from "/src/assets/img12.jpg";
// import image9 from "/src/assets/img15.jpg";
import image10 from "/src/assets/img16.jpg";
import image11 from "/src/assets/img17.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="md:mt-24  md:px-10 px-4 mb-20">
        <h1 className="md:text-4xl text-3xl font-bold pb-8">Our Gallery</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-6 gap-y-6 gap-x-2">
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden relative  col-span-2">
            <img
              src={image10}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">
                Meeting With Farmers in Bong County
              </h1>
            </div>
          </div>

          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden col-span-2 relative">
            <img
              src={image11}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">
                Meeting With Farmers in Bong County
              </h1>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden col-span-2 relative">
            <img
              src={image1}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">
                Meeting With Farmers in Bong County
              </h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-blue-200 rounded-md overflow-hidden col-span-2 relative">
            <img
              src={image3}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">Nursery In Bong County</h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-purple-200 rounded-md overflow-hidden col-span-2 relative">
            <img
              src={image2}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">
                Meeting With Farmers in Bong County
              </h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-slate-200 rounded-md overflow-hidden relative">
            <img
              src={image4}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">
                Meeting With Farmers in Bong County
              </h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden relative">
            <img
              src={image5}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">Alex presents</h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden relative">
            <img
              src={image6}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">Preparation of Nursery Bags</h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-slate-200 rounded-md overflow-hidden relative">
            <img
              src={image7}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">Preparation of Nursery Bags</h1>
            </div>
          </div>
          <div className="w-full h-[20rem] bg-red-200 rounded-md overflow-hidden col-span-2 relative">
            <img
              src={image8}
              alt="galllery Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2 rounded px-2 py-2 text-white bg-primary">
              <h1 className="text-lg font-bold">Our Nursery </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

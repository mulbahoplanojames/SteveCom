import { Circles } from "react-loader-spinner";
const Spinner = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="#ff7e00"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Spinner;

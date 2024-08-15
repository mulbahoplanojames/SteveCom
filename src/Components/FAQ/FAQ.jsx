import { FAQData } from "../../Data/Data";

const FAQ = () => {
  return (
    <>
      <div className="md:px-8 px-3 pt-8 pb-8 text-center">
        <p className="text-primary text-lg uppercase font-bold pb-2">
          Asked Question
        </p>
        <h1 className="md:text-4xl text-3xl font-bold md:pb-8 pb-5">
          Frequently Asked Question
        </h1>
        {FAQData.map((FAQ) => (
          <div className="md:px-32" key={FAQ.id}>
            <div className="collapse collapse-arrow  mb-2 rounded-none text-white">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl  bg-primary uppercase font-bold">
                {FAQ.title}
              </div>
              <div className="collapse-content bg-black py-2">
                <p>{FAQ.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;

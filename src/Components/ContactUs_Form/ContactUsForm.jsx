const ContactUsForm = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-y-8 md:px-8 px-2 mb-16 mt-4">
        <form className="w-full h-fit ">
          <div className="flex justify-between items-center md:flex-nowrap flex-wrap gap-4 ">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="w-full h-[7vh] bg-[#dff2d4] border-2 border-black outline-none rounded text-lg p-4"
            />

            {/* phone  */}

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full h-[7vh] bg-[#dff2d4] border-2 border-black outline-none rounded text-lg p-4"
            />
          </div>

          {/* email  */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full h-[7vh] bg-[#dff2d4] border-2 border-black outline-none rounded text-lg p-4 mt-4"
          />

          {/* message  */}
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-[24vh] bg-[#dff2d4] border-2 border-black outline-none rounded text-lg p-4 mt-4"
          ></textarea>

          {/* submit button */}
          <button
            className="text-white md:w-[30%] w-full bg-black rounded text-lg md:py-1 md:px-4 py-3 mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className="w-full h-[20.6rem] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013955.2378457396!2d-10.465509562517598!3d6.918954099727077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa6f9be9cda0a0d%3A0xed694f10d742d357!2sBong%2C%20Liberia!5e0!3m2!1sen!2srw!4v1721124310997!5m2!1sen!2srw"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;

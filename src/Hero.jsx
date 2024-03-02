const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center   bg-[#212529] pb-12 pt-20 lg:pt-24 lg:pb-4  ">
      <div className="lg:w-[45%] w-[90%] max-w-[1920px]">
        <p className="text-white font-semibold text-[30px]   lg:text-[50px]">
          We Create Minimal & Functional Website, Powered by The Latest
          Bootstrap 5 Alpha.
        </p>
        <button className="py-1 mt-6 text-white px-3 bg-[#ffffff0d]">
          Available for freelance work
        </button>
      </div>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const CardArray = ["work-1.jpg", "work-2.jpg", "work-3.jpg", "work-4.jpg"];
  return (
    <div className=" lg:flex my-16 lg:w-full w-[90%] lg:mr-8 lg:pt-0 pt-4 max-w-[1920px] justify-end  lg:flex-row grid grid-cols-2 gap-4 lg:gap-4">
      {CardArray.map((item) => (
        <img
          className="w-[218px] cursor-pointer object-cover h-[150px]"
          src={item}
          alt=""
        />
      ))}
    </div>
  );
};

export { Hero };

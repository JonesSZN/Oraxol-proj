const Portfolio = () => {
  return (
    <section className="w-full py-24 flex justify-center bg-[#212529]">
      <div className="lg:w-[50%] w-[90%] max-w-[1920px]">
        <Top />
        <Cards />
      </div>
    </section>
  );
};

const Cards = () => {
  const CardObject = [
    {
      image: "work-1.jpg",
      title: "Branding,Printing",
      text: "High Quality Design concept",
    },
    {
      image: "work-2.jpg",
      title: "Graphic Design",
      text: "High Quality Design concept",
    },
    {
      image: "work-3.jpg",
      title: "Web Development",
      text: "High Quality Design concept",
    },
    {
      image: "work-4.jpg",
      title: "Web Design, Web Development",
      text: "High Quality Design concept",
    },
    {
      image: "work-5.jpg",
      title: "Web Development",
      text: "High Quality Design concept",
    },
    {
      image: "work-6.jpg",
      title: "Web Design, Web Development",
      text: "High Quality Design concept",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-x-6 gap-y-28">
      {CardObject.map((item) => (
        <div className="flex flex-col  gap-8">
          <img
            className="h-[550px] hover:opacity-50 duration-500 transition-all cursor-pointer rounded-md  object-cover"
            src={item.image}
            alt=""
          />
          <div className="ml-4">
            <p className="text-[15px] text-[#aaaaaa] underline">{item.title}</p>
            <p className="text-white cursor-pointer max-w-[400px] text-[30px]">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col mb-16 items-center justify-center gap-2">
      <p className="text-[13px] text-[#aaaaaa] font-bold">PORTFOLIO</p>
      <p className="text-white text-[40px] font-bold">Our Portfolio</p>
    </div>
  );
};

export { Portfolio };

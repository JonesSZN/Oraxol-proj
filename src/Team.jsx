const Team = () => {
  return (
    <section className="w-full flex justify-center py-24 bg-[#212529]">
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
      title: "John McArthur",
      position: "CEO, Founder & Developer",
      image: "team-1.jpg.webp",
    },
    {
      title: "Mark Sky",
      position: "Graphic Designer",
      image: "team-2.jpg.webp",
    },
    {
      title: "Kyle Becker",
      position: "Web Designer",
      image: "team-3.jpg.webp",
    },
    {
      title: "Alan Nortwood",
      position: "CEO, Founder & Developer",
      image: "team-4.jpg.webp",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-8">
      {CardObject.map((item) => (
        <div className="bg-[#18191c] group p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white mb-2 text-[22px] font-semibold">
                {item.title}
              </h2>
              <p className="text-[#aaaaaa] cursor-pointer underline">
                {item.position}
              </p>
            </div>
            <img
              className="rounded-b-full group-hover:-translate-x-4 duration-500 group-hover:rounded-b-full group-hover:rounded-tr-full group-hover:rounded-tl-none rounded transition-all rounded-tl-full w-[120px] h-[120px]"
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
  return (
    <div className="lg:mb-24 mb-16 flex flex-col font-bold gap-2 ">
      <h2 className="text-[13px] tracking-[2.1px] text-[#aaaaaa]">OUR TEAM</h2>
      <p className="text-white text-[28px] lg:text-[40px]">
        Designer & Developer
      </p>
    </div>
  );
};

export { Team };

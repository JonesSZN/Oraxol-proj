import { Lightbulb } from "lucide-react";
import { Laptop } from "lucide-react";
import { Printer } from "lucide-react";
import { TheaterIcon } from "lucide-react";

const Services = () => {
  return (
    <section className="w-full bg-[#212529] py-24 flex justify-center">
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
      image: <Lightbulb color="white" size={50} />,
      text: "Graphic Design",
    },
    {
      image: <Laptop color="white" size={50} />,
      text: "Web Design",
    },
    {
      image: <Printer color="white" size={50} />,
      text: "Branding & Printing",
    },
    {
      image: <TheaterIcon color="white" size={50} />,
      text: "Web Development",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-4 flex flex-col gap-4 lg:gap-4 ">
      {CardObject.map((item) => (
        <div className="border border-gray-600  flex flex-col items-center gap-4 p-8">
          {item.image}
          <p className="text-white text-center text-[24px]">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

const Top = () => {
  return (
    <div className="mb-16 flex flex-col items-center">
      <h1 className="text-[13px] font-bold text-[#aaaaaa]">SERVICES</h1>
      <p className="text-white text-[28px] text-center lg:text-[40px] font-bold">
        We Provide the Perfect Solution
      </p>
    </div>
  );
};

export { Services };

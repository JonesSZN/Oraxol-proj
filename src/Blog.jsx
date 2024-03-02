import { Heart } from "lucide-react";

const Blog = () => {
  return (
    <section className="w-full bg-[#212529] py-24 flex justify-center">
      <div className="lg:w-[50%] w-[90%] max-w-[1920px]">
        <Top />
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  const CardObject = [
    {
      bgimage: "image_1.jpg.webp",
      image: "person_1.jpg.webp",
      name: "John Dorf",
      heart: <Heart color="#aaaaaa" size={20} />,
      date: "Dec. 09, 2020 3 Comments",
      text1: "Grow your insights with inspiring news",
      text2:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      bgimage: "image_2.jpg.webp",
      image: "person_1.jpg.webp",
      name: "John Dorf",
      heart: <Heart color="#aaaaaa" size={20} />,
      date: "Dec. 09, 2020 3 Comments",
      text1: "Grow your insights with inspiring news",
      text2:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      bgimage: "image_3.jpg.webp",
      image: "person_1.jpg.webp",
      name: "John Dorf",
      heart: <Heart color="#aaaaaa" size={20} />,
      date: "Dec. 09, 2020 3 Comments",
      text1: "Grow your insights with inspiring news",
      text2:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-6 lg:gap-6">
      {CardObject.map((item) => (
        <div className="border flex flex-col  border-gray-500">
          <div>
            <img
              className="h-[350px] w-full object-cover"
              src={item.bgimage}
              alt=""
            />
          </div>

          <div className="py-7 font-bold px-[30px] flex flex-col   gap-6">
            <Profile image={item.image} name={item.name} heart={item.heart} />
            <Date date={item.date} />
            <Text1 text1={item.text1} />
            <Text2 text2={item.text2} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Profile = ({ image, name, heart }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img className="rounded-full w-[33px] h-[33px]" src={image} alt="" />
        <p className="text-[#ffffffB3] text-[14px]">{name}</p>
      </div>
      {heart}
    </div>
  );
};

const Date = ({ date }) => {
  return (
    <>
      <p className="text-[13px] text-[#aaaaaa]">{date}</p>
    </>
  );
};
const Text1 = ({ text1 }) => {
  return (
    <>
      <p className="text-white text-[20px]">{text1}</p>
    </>
  );
};

const Text2 = ({ text2 }) => {
  return (
    <>
      <p className="text-[#aaaaaa] text-[15px]">{text2}</p>
    </>
  );
};

const Top = () => {
  return (
    <div className="flex mb-16 font-bold flex-col items-center">
      <p className="text-[#aaaaaa] text-[13px]">BLOG</p>
      <p className="text-white text-[28px] lg:text-[40px]">Recent Blog</p>
    </div>
  );
};

export { Blog };

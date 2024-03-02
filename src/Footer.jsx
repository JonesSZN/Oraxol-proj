import { ChevronRight } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Map } from "lucide-react";
import { Phone } from "lucide-react";
import { Pointer } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full pt-[48px]  lg:pt-24 flex flex-col items-center bg-[#212529]">
      <div className="lg:w-[65%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col gap-8 ">
          <Oraxol />
          <Explore />
          <QuickLinks />
          <Categories />
          <Questions />
        </div>
      </div>
      <Bottom />
    </footer>
  );
};

const Oraxol = () => {
  const OraxolObject = [
    {
      title: "Oraxol",
      text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  return (
    <div className="w-[70%]">
      {OraxolObject.map((item) => (
        <div>
          <h2 className="mb-[40px] font-bold text-white">{item.title}</h2>
          <p className="text-[15px]  mb-[16px] text-[#ffffff66]">{item.text}</p>
        </div>
      ))}
      <Socials />
    </div>
  );
};

const Explore = () => {
  const ExploreArray = ["About us", "Blog", "Work"];
  return (
    <div className="w-1/2">
      <h2 className="text-white  font-bold tracking-[2.1px] mb-[32px]">
        EXPLORE
      </h2>
      <ul className="flex flex-col gap-4">
        {ExploreArray.map((item) => (
          <div className="flex  items-center">
            <ChevronRight color="#ffffff66" />
            <li className="text-[#ffffff66] text-[15px] underline cursor-pointer">
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const QuickLinks = () => {
  const QuickLinksArray = [
    "Contact Us",
    "Terms & Conditions",
    "Privacy",
    "Feedbacks",
  ];
  return (
    <div className="w-1/2">
      <h2 className="text-white font-bold tracking-[2.1px] mb-[32px]">
        QUICK LINKS
      </h2>
      <ul className="flex flex-col gap-4">
        {QuickLinksArray.map((item) => (
          <div className="flex  items-center">
            <ChevronRight color="#ffffff66" />
            <li className="text-[#ffffff66] text-[15px] underline cursor-pointer">
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Categories = () => {
  const CategoriesArray = [
    "Graphic Design",
    "Web Design",
    "Branding & Printing",
    "Web Development",
  ];
  return (
    <div className="w-1/2">
      <h2 className="text-white font-bold tracking-[2.1px] mb-[32px]">
        CATEGORIES
      </h2>
      <ul className="flex flex-col gap-4">
        {CategoriesArray.map((item) => (
          <div className="flex  items-center">
            <ChevronRight color="#ffffff66" />
            <li className="text-[#ffffff66]  text-[15px] underline cursor-pointer">
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Questions = () => {
  const QuestionsObject = [
    {
      image: <Map color="white" size={20} />,
      text: "	203 Fake St. Mountain View, San Francisco, California, USA",
    },
    {
      image: <Phone color="white" size={20} />,
      text: "	+2 392 3929 210",
    },
    {
      image: <Pointer color="white" size={20} />,
      text: "info@yourdomain.com",
    },
  ];
  return (
    <div className="lg:w-1/2">
      <h2 className="text-white font-bold tracking-[2.1px] mb-[32px]">
        HAVE A QUESTION?
      </h2>
      <div className="flex flex-col gap-4">
        {QuestionsObject.map((item) => (
          <div className="flex gap-4 items-center">
            <p>{item.image}</p>
            <p className="text-[#ffffff66] text-[15px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Socials = () => {
  const SocialsArray = [
    <Twitter color="white" size={25} />,
    <Facebook color="white" size={25} />,
    <Instagram color="white" size={25} />,
  ];
  return (
    <div className="flex cursor-pointer gap-4 items-center">
      {SocialsArray.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

const Bottom = () => {
  return (
    <div className=" w-full flex border-t border-t-gray-700 mt-32  lg:mt-48 lg:py-16 py-16 justify-center">
      <p className="text-[#ffffff80] text-center text-[13px]">
        Copyright ©2024 All rights reserved | This template is made with by
        Colorlib
      </p>
    </div>
  );
};

export { Footer };

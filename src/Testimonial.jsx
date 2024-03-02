import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { QuoteIcon } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="w-full flex justify-center py-24 bg-[#212529]">
      <div className="lg:w-[55%] w-[90%] flex flex-col items-end   max-w-[1920px]">
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="">
      <p className="text-[13px] mb-2 font-bold text-[#aaaaaa]">TESTIMONIAL</p>
      <h2 className="text-[40px] mb-8 font-bold text-white">
        Satisfied Clients
      </h2>

      <Arrows />
      <BottomDiv />
    </div>
  );
};

const Arrows = () => {
  return (
    <div className="flex gap-2 items-center mb-2">
      <ArrowLeft color="white" />
      <ArrowRight color="white" />
    </div>
  );
};

const BottomDiv = () => {
  return (
    <div className="flex flex-col gap-4">
      <QuoteIcon className="my-4" color="white" size={35} />
      <p className="text-[15px] text-[#ffffffCC] max-w-[550px]">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <Profile />
    </div>
  );
};

const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-[80px] h-[80px]"
          src="person_1.jpg.webp"
          alt=""
        />
        <div>
          <p className="text-[22px] text-white font-bold">Roger Scott</p>
          <p className="text-[13px] text-[#aaaaaa] font-bold">
            Marketing Manager
          </p>
        </div>
      </div>
    </>
  );
};

export { Testimonial };

import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className=" w-full flex py-4 lg:py-8 justify-center bg-[#212529]">
      <div className="lg:w-[65%] w-[95%] max-w-[1920px]">
        <Nav />
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <NavLeft />
      <NavRight />
    </nav>
  );
};

const NavLeft = () => {
  return <p className="text-white cursor-pointer text-[18px]">oraxol</p>;
};
const NavRight = () => {
  const NavLinks = ["Work", "Blog", "About", " Contact"];
  return (
    <>
      <div className="lg:hidden flex gap-2 items-center">
        <Menu color="white" />
        <p className="text-white">MENU</p>
      </div>
      <ul className="lg:flex items-center hidden gap-12">
        {NavLinks.map((item) => (
          <li className="text-[#aaaaaa] cursor-pointer font-[500] text-[14px]">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export { Header };

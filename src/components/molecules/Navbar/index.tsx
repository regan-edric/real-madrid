import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItem from "../../atoms/NavItem";
import { NAV_ITEM } from "../../../constant/CONST";

export default function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  return (
    <>
      <nav className=" bg-white h-[9vh] flex justify-between items-center px-5 py-9">
        <div className="flex items-center justify-center gap-4">
          <button
            className={`rounded-lg p-[6px]
              ${isOpenNavbar ? `bg-indigo-100 text-indigo-800` : ``}`}
            onClick={() => setIsOpenNavbar(!isOpenNavbar)}
          >
            <RxHamburgerMenu size={30} />
          </button>
          <img
            className="h-[6vh]"
            src="/assets/images/logo-real-madrid.png"
            alt=""
          />
          <div className="h-[5vh] bg-slate-300 w-px"></div>
          <img
            className="h-[6vh]"
            src="/assets/images/logo-15-ucl.webp"
            alt="15-ucl"
          />
        </div>
        <div className="hidden lg:flex gap-7">
          {NAV_ITEM.map((item) => (
            <NavItem link={item.url} name={item.name} key={item.name} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="justify-center items-center hidden lg:flex gap-5">
            <img className="h-[6vh]" src="/assets/icons/emirates.svg" />
            <img className="h-[6vh]" src="/assets/icons/adidas.svg" />
            <button className="h-[5vh] text-slate-400 hover:text-indigo-600 transition-all duration-700">
              <BsThreeDotsVertical size={22} />
            </button>
          </div>
          <button className="flex justify-center items-center p-2 border-2 border-indigo-600 rounded-lg text-indigo-600 gap-2 font-semibold">
            <LuUser size={22} /> Sign in
          </button>
        </div>
      </nav>
      {isOpenNavbar ? <div className="h-[91vh] bg-red-700"></div> : ""}
    </>
  );
}

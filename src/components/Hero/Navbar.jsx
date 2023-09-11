import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import CompanyLogo from "../../assets/company-logo.png";
import { AiOutlineDown } from "react-icons/ai";
import { Dropdown } from "../common/DropDown";
const Navbar = () => {
  return (
    <header className="w-full h-20">
      <nav className="flex items-center justify-between w-full pb-2 text-white border-b-2 border-white">
        {/* <h2 className="text-xl font-semibold">Your Logo</h2> */}
        <img src={CompanyLogo} className="w-20" />
        <ul className="justify-end hidden gap-8 md:flex">
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer ">
            <Dropdown color={"Freature"} />
          </li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex justify-end md:hidden">
          <GiHamburgerMenu color="white" className="text-2xl cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

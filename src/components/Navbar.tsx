import React from "react";
import { RxAvatar } from "react-icons/rx";
import { HiChartPie } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="bg-group-background text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-2 px-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <img
            src={require("../assets/logo.png")}
            alt="logo"
            className="w-8 h-8"
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white hover:text-gray-300 flex flex-row items-center font-medium text-md" href="#">
            <HiChartPie className="w-12 h-12 text-white p-2" />
            Themetic Analysis
          </a>
          <a className="mr-5 text-white hover:text-gray-300 flex flex-row items-center font-medium text-md" href="#">
            <HiChartPie className="w-12 h-12 text-white p-2" />
            Nascent Themes
          </a>
          <a className="mr-5 text-white hover:text-gray-300 flex flex-row items-center font-medium text-md" href="#">
            <AiFillSetting className="w-12 h-12 text-white p-2" />
            Settings
          </a>
        </nav>
        <RxAvatar className="w-8 h-8 text-white p-2 bg-button-background rounded-full" />
      </div>
    </header>
  );
};

export default Navbar;

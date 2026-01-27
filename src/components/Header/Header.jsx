import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import GetBtn from "../GetBtn";
import Login from "../Login";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border border-gray-50 rounded-2xl mt-7 h-20 w-[90%] lg:w-[80%] px-4 md:px-6">
      
      <div className="flex items-center justify-between h-20">
        <img src={Logo} alt="logo" className="h-7 w-auto lg:h-9" />

        <ul className="hidden lg:flex gap-6 md:text-xs lg:text-md xl:text-xl text-[#4F4F4F] font-semibold ">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="hidden lg:flex gap-3">
          <Login />
          <GetBtn />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X className="text-[#4F4F4F]" /> : <Menu className="text-[#4F4F4F]" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border pt-4 pb-6 space-y-4 rounded-2xl flex flex-col items-center justify-center bg-[#ffffff]">
          <ul className="flex flex-col gap-4 text-[#4F4F4F]  text-center font-semibold">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <div className="flex flex-col justify-center items-center gap-3 pt-4">
            <Login />
            <GetBtn />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
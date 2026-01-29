import React from "react";
import Bg from "../../assets/footerVector.png";
import CardBg from "../../assets/footerCardVector.png";
import GetBtn2 from "../GetBtn2";
import Logo from '../../assets/footerLogo.png'

const Footer = () => {
  return (
    <div className="relative bg-gray-950 w-full h-full lg:h-187.25 gap-10 flex flex-col items-center justify-around">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${Bg})` }}
      />

      <div className="relative flex flex-col lg:flex-row card w-[80%] justify-around items-center h-fit mt-10 gap-20 p-20 rounded-2xl bg-[#5A50D8]">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${CardBg})` }}
        />

        <div className="left flex flex-col gap-4 items-center md:items-start">
            <h3 className="font-semibold text-3xl md:text-5xl text-[#FFFFFF] text-nowrap">Ready to get started?</h3>
            <p className="text-[#FFFFFF] font-normal text-sm md:text-[18px]">Take the first step to growing your business</p>
        </div>
        <div className="right">
            <GetBtn2/>
        </div>
      </div>

      <div className="logoLinks relative flex flex-col lg:flex-row card w-[80%] justify-between items-center h-fit gap-20 rounded-2xl ">
        <img src={Logo} alt="Dashify Logo" loading="lazy" className="" />
        <div className="links text-nowrap flex flex-col gap-6">
            <div className="topLinks flex gap-6  md:text-sm lg:text-md xl:text-xl text-gray-300 text-[16px] font-semibold">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Blogs</a>
                <a href="#">About Us</a>
            </div>
            <div className="bottomLinks flex  gap-6 md:text-sm lg:text-md xl:text-xl text-gray-300 text-[16px] font-semibold">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>
      </div>

      <div className="last relative flex flex-col-reverse gap-4 md:flex-row card w-[80%] justify-between items-center h-fit">
        <div className="reserved">
            <p className=" md:text-sm lg:text-md xl:text-xl text-gray-300 text-[16px] font-semibold">© 2025 Dashify. All rights reserved.</p>
        </div>
        <div className="bottomLinks flex  gap-6 md:text-sm lg:text-md xl:text-xl text-gray-300 text-[16px] font-semibold">
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">YouTube</a>
            </div>
      </div>
    </div>
  );
};

export default Footer;

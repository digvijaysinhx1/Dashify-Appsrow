import React from "react";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";

const Companies = (props) => {
  return (
    <>
      <div className="overflow-hidden lg:hidden w-full">
        <div className={`${props.marquee} flex w-max`}>
          {/* First set */}
          <div className="flex items-center gap-12">
            <img src={logo1} className="h-15 md:h-25" />
            <img src={logo2} className="h-15 md:h-25" />
            <img src={logo3} className="h-15 md:h-25" />
            <img src={logo4} className="h-15 md:h-25" />
            <img src={logo5} className="h-15 md:h-25" />
            <img src={logo6} className="h-15 md:h-25" />
            <img src={logo7} className="h-15 md:h-25" />
            <img src={logo8} className="h-15 md:h-25" />
          </div>

          {/* Duplicate set (IMPORTANT for seamless loop) */}
          <div className="flex items-center gap-12 ml-12">
            <img src={logo1} className="h-15 md:h-25" />
            <img src={logo2} className="h-15 md:h-25" />
            <img src={logo3} className="h-15 md:h-25" />
            <img src={logo4} className="h-15 md:h-25" />
            <img src={logo5} className="h-15 md:h-25" />
            <img src={logo6} className="h-15 md:h-25" />
            <img src={logo7} className="h-15 md:h-25" />
            <img src={logo8} className="h-15 md:h-25" />
          </div>
          <div className="flex items-center gap-12 ml-12">
            <img src={logo1} className="h-15 md:h-25" />
            <img src={logo2} className="h-15 md:h-25" />
            <img src={logo3} className="h-15 md:h-25" />
            <img src={logo4} className="h-15 md:h-25" />
            <img src={logo5} className="h-15 md:h-25" />
            <img src={logo6} className="h-15 md:h-25" />
            <img src={logo7} className="h-15 md:h-25" />
            <img src={logo8} className="h-15 md:h-25" />
          </div>
        </div>
      </div>

      <div className="parent hidden lg:grid gap-5">
        <div className="div1">
            <img src={logo1} className="h-25" />
        </div>
        <div className="div2">
            <img src={logo2} className="h-25" />
        </div>
        <div className="div3">
            <img src={logo3} className="h-25" />
        </div>
        <div className="div4">
            <img src={logo4} className="h-25" />
        </div>
        <div className="div5">
            <img src={logo5} className="h-25" />
        </div>
        <div className="div6">
            <img src={logo6} className="h-25" />
        </div>
        <div className="div7">
            <img src={logo7} className="h-25" />
        </div>
        <div className="div8">
            <img src={logo8} className="h-25" />
        </div>
      </div>
    </>
  );
};

export default Companies;

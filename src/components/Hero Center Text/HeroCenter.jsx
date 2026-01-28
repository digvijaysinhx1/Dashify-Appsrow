import React from "react";
import HeroHeading from "./HeroHeading";
import HeroPara from "./HeroPara";
import GetBtn from "../GetBtn";
import MultiImages from "./MultiImages";
import Learn from "../Learn";

const HeroCenter = () => {
  return (
    <div className="main flex flex-col w-87 h-fit mt-20 md:w-142 gap-23 justify-center z-50 items-center">
      <div className="infos flex flex-col justify-center items-center gap-12.5">
        <div className="flex flex-col gap-4">
        <HeroHeading/>
        <HeroPara/>
        </div>
        <div className="cta flex flex-col md:flex-row gap-5 items-center justify-center">
          <GetBtn/>
          <Learn/>
        </div>
      </div>
      <div className="multipleImages">
        <MultiImages/>
      </div>
    </div>
  );
};

export default HeroCenter;

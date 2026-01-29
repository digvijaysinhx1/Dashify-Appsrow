import React from "react";
import Tags from "./Tags";
import circles from "../../assets/analytics.png";

const AnalyticCard = (elem) => {
  return (
    <div className="hidden bg-white/20 backdrop-blur-sm h-119 w-80 absolute lg:flex top-50 -right-10 xl:right-30 items-center justify-center rounded-[26px] rotate-6" >
      <div className="flex flex-col justify-center items-center border-[#EFF3FE] bg-[#ffffff] gap-3 h-114 w-75 rounded-2xl">
        <p className="self-start font-semibold text-[#020202] text-lg ml-5">
          Analytics Reports
        </p>
        <img src={circles} alt="analytics image" loading="lazy" className="h-55 w-55"/>
        <div className="tags flex flex-col gap-3">
          <Tags
            borderColor="border-[#5A50D8]"
            p1="Financial Report"
            p2="90%"
          />
          <Tags
            borderColor="border-[#FFCC42]"
            p1="Business proposal"
            p2="70%"
          />
          <Tags
            borderColor="border-[#1AC7E5]"
            p1="Update leadership"
            p2="50%"
          />
          <Tags
            borderColor="border-[#E5381A]"
            p1="Onboarding plan"
            p2="28%"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticCard;

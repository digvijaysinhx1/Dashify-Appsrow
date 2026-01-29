import React from "react";
import vector1 from "../../assets/features.png";
import vector2 from "../../assets/features2.png";
import ChooseBtn from "../Choose";
import Tick from "../../assets/tick.png"
import Tick2 from "../../assets/tick2.png"
import ChooseBtn2 from "../ChooseBtn2";

const Sec6 = () => {
  return (
    <div className="Main relative bg-white h-fit flex flex-col items-center pb-15 gap-10">
      <div className="text flex flex-col gap-4 w-95 md:w-140.25 text-center">
        <h3
          className="font-medium text-3xl md:text-5xl text-gray-950"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Transparent pricing for you and your team
        </h3>
        <p className="text-gray-700 font-normal text-base md:text-lg">
          Transparent pricing, with clear, accessible rates. Everyone can focus
          on what matters most — achieving your goals.
        </p>
      </div>
      <div
        className="tabs flex gap-4 text-base md:text-lg font-medium"
        style={{ fontFamily: "Instrument Sans" }}
      >
        <p className="text-gray-900 text-[18px] cursor-pointer">
          Monthly
        </p>
        {/* toggle btn */}
        <p className="text-[#5A50D8] text-[18px] cursor-pointer">
          Yearly
        </p>
        <p className="bg:[#F5FFF6] text-[#02C519] px-2 py-1 rounded-lg text-sm">
          -10%
        </p>
      </div>
      <div className="plans flex lg:flex-row flex-col items-center gap-3">
        <div className="basic text-gray-950 overflow-hidden flex flex-col items-center justify-around relative z-5 bg-[#EFF3FE] w-85.25 h-134.75 rounded-2xl">
          <img src={vector1} alt="vector" loading="lazy" className="absolute top-0 right-0 w-27 -z-10" />
          <img
            src={vector2}
            alt="vector 2"
            loading="lazy"
            className="absolute bottom-0 left-0 w-27 -z-10"
          />
          <div className="flex flex-col gap-5">

          <div className="planInfo w-65.25 h-27.25 gap-3 pb-6 border-b border-[#E2E8FD]">
            <div className="name w-full font-medium text-xl"><p>Basic</p></div>
            <div className="amt flex items-center h-fit w-full gap-2">
                <h4 className="font-medium text-[39px]">$26</h4>
                <p className="font-normal text-xl">/mo</p>
            </div>
          </div>

            <div className="checks w-65.25 h-27.25 flex flex-col gap-2">
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>2 seats</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Simple support</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Simple onboarding features</p>
                </div>
            </div>
          </div>

        <ChooseBtn/>
        </div>

        <div className="pro overflow-hidden flex flex-col items-center justify-around relative z-5 text-[#FFFFFF] bg-[#EFF3FE] w-85.25 h-134.75 rounded-2xl">
          <img src={vector1} alt="vector" className="absolute top-0 right-0 w-27 -z-10" />
          <img
            src={vector2}
            alt="vector"
            className="absolute bottom-0 left-0 w-27 -z-10"
          />
          <div className="flex flex-col gap-5">

          <div className="planInfo w-65.25 h-27.25 gap-3 pb-6 border-b border-[#6E6FE6]">
            <div className="name w-full font-medium text-xl"><p>Pro</p></div>
            <div className="amt flex relative items-center h-fit w-full gap-2">
                <h4 className="font-medium text-[39px]">$49</h4>
                <p className="font-normal absolute -top-8 right-0 text-xl bg-[#FFFFFF] text-[#5A50D8] px-4 py-2 rounded-xl">Popular</p>
                <p className="font-normal text-xl">/mo</p>
            </div>
          </div>

            <div className="checks w-65.25 h-27.25 flex flex-col gap-2">
                <div className=" flex items-center gap-3">
                    <img src={Tick2} alt="tick mark" loading="lazy" />
                    <p>5 seats</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick2} alt="tick mark" loading="lazy" />
                    <p>Expert support</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick2} alt="tick mark" loading="lazy" />
                    <p>Monthly payroll</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick2} alt="tick mark" loading="lazy" />
                    <p>Third party integrations</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick2} alt="tick mark" loading="lazy" />
                    <p>Advanced onboarding features</p>
                </div>
            </div>
          </div>

        <ChooseBtn2/>
        </div>

       <div className="enterprise text-gray-950 overflow-hidden flex flex-col items-center justify-around relative z-5 bg-[#EFF3FE] w-85.25 h-134.75 rounded-2xl">
          <img src={vector1} alt="vector 1" className="absolute top-0 right-0 w-27 -z-10" loading="lazy" />
          <img
            src={vector2}
            alt="vector 2" loading="lazy"
            className="absolute bottom-0 left-0 w-27 -z-10"
          />
          <div className="flex flex-col gap-5">

          <div className="planInfo w-65.25 h-27.25 gap-3 pb-6 border-b border-[#E2E8FD]">
            <div className="name w-full font-medium text-xl"><p>Enterprise</p></div>
            <div className="amt flex items-center h-fit w-full gap-2">
                <h4 className="font-medium text-[39px]">$179</h4>
                <p className="font-normal text-xl">/mo</p>
            </div>
          </div>

            <div className="checks w-65.25 h-27.25 flex flex-col gap-2">
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Unlimited seats</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Priority 1-1 support</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Monthly payroll</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Third party integrations</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Advanced onboarding features</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Dedicated HR expert</p>
                </div>
                <div className=" flex items-center gap-3">
                    <img src={Tick} alt="tick mark" loading="lazy" />
                    <p>Custom admin permission</p>
                </div>
            </div>
          </div>

        <ChooseBtn/>
        </div>
      </div>
    </div>
  );
};

export default Sec6;

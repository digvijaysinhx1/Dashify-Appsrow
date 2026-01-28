import React from "react";
import user from "../../assets/img1.png";
import star from "../../assets/Star.png";

const Reviews = (props) => {
  return (
    <div className="w-100 p-10 h-fit lg:w-135.75 lg:h-77.75 flex flex-col bg-[#ffffff] rounded-2xl border border-[#E2E8FD]">
      <div className="top flex flex-col gap-5 border-b border-gray-100 mb-10 justify-center">
        <div className="up flex gap-4">
          <div className="img">
            <img
              src={user}
              alt=""
              loading="lazy"
              className="-rotate-8 h-15 w-20 lg:w-20 z-50"
            />
          </div>
          <div className="name flex flex-col gap-1.5 w-full">
            <h6
              className="text-xl lg:text-[25px] font-medium text-gray-900"
              style={{ fontFamily: "Instrument Sans" }}
            >
              {props.h6}
            </h6>
            <span className="text-[14.4px] font-normal text-gray-400">
              CEO & Founder
            </span>
          </div>
        </div>
        <div className="down font-medium text-lg text-gray-700 w-90 lg:w-115.75">
          <p>{props.p}</p>
        </div>
      </div>
      <div className="bottom flex gap-1 mt-2">
        <img src={star} alt="star img" className="w-5 h-5" loading="lazy"/>
        <img src={star} alt="star img" className="w-5 h-5" loading="lazy"/>
        <img src={star} alt="star img" className="w-5 h-5" loading="lazy"/>
        <img src={star} alt="star img" className="w-5 h-5" loading="lazy"/>
        <img src={star} alt="star img" className="w-5 h-5" loading="lazy"/>
      </div>
    </div>
  );
};

export default Reviews;

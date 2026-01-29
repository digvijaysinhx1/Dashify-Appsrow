import React from "react";
import vector1 from "../../assets/features.png";
import vector2 from "../../assets/features2.png";

const Features = (props) => {
  return (
    <div className="main relative px-4 sm:px-6 lg:px-10 flex justify-center">
      <div
        className={` texts flex flex-col ${props.flex} items-center gap-10 w-full max-w-7xl`}
      >
        <div
          className={` w-full md:w-[80%] lg:w-[50%] flex flex-col ${props.items} gap-4 text-center lg:text-left`}
        >
          <div
            className={`up flex flex-col items-center lg:items-start gap-3 `}
          >
            <p className="text-sm md:text-base font-medium w-fit text-[#5A50D8] bg-[#E2E8FD] rounded-2xl px-4 py-2">
              {props.p}
            </p>

            <h3
              className="font-medium text-3xl text-center sm:text-4xl md:text-5xl"
              style={{ fontFamily: "Instrument Sans" }}
            >
              {props.h3}
            </h3>
          </div>

          <p className="w-full md:w-[90%] text-base md:text-lg text-gray-700">
            {props.p}
          </p>
        </div>
        <div
          className=" analytics-detials relative w-full max-w-100 sm:max-w-105 md:max-w-120 lg:max-w-130 aspect-4/5 rounded-2xl overflow-hidden flex items-center justify-center bg-[#EFF3FE]"
        >
          <img
            src={vector1}
            alt="vector"
            className="absolute top-0 right-0 w-28 sm:w-32"
            loading="lazy"
          />
          <img
            src={vector2}
            alt="vector"
            className="absolute bottom-0 left-0 w-28 sm:w-32"
            loading="lazy"
          />

          <div className="relative z-10">{props.code}</div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import Companies from "./Companies";

const Testimonial = (elem) => {
  return (
    <div className="relative h-65 lg:h-126 w-auto flex flex-col justify-center items-center">
      <h5
        className="font-medium text-gray-900 absolute top-20 text-xl md:text-3xl"
        style={{ fontFamily: "Instrument Sans" }}
      >
        Trusted by 8,000 leading companies
      </h5>
      <div className="absolute top-40">
        <Companies marquee="marquee-track"/>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import Card from "./Card";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";

const Sec3 = (elem) => {
  return (
    <div className="relative bg-[#FAFBFF] w-full flex flex-col items-center h-screen">
      <div className="infos relative flex flex-col items-center md:w-186.5 w-80 justify-center text-center h-fit gap-4 top-20">
        <h3
          className="lg:text-5xl text-2xl font-medium text-center text-gray-950 "
          style={{ fontFamily: "Instrument Sans" }}
        >
          Dashify is built for you
        </h3>
        <p className="text-gray-700 font-normal text-sm md:text-md lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row absolute top-66 gap-10">
        <Card heading="Streamline your work" para="Efficiency starts here. Streamline your work with our project tracking features. Simplify tasks and maximize productivity." icon={icon1}/>
        <Card heading="Work with your favorite tools" para="Integrate quickly and directly with your tools you already love. It’s as easy as 1, 2, 3." icon={icon2}/>
        <Card heading="Save hours every week" para="Efficiency starts here. Streamline your work with our project tracking features. Simplify tasks and maximize productivity." icon={icon3}/>
      </div>
    </div>
  );
};

export default Sec3;

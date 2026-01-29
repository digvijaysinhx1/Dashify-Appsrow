import React from "react";
import Reviews from "./Reviews";

const Sec5 = () => {
  return (
    <div className="flex flex-col relative items-center bg-[#FCFCFC] py-20 overflow-hidden">
      <h3 className="text-3xl md:text-5xl font-medium text-gray-950 mb-12">
        What our customer say
      </h3>

      {/* Row 1 — left to right */}
      <div className="marquee-row">
        <div className="marquee-review marquee-left">
          <Reviews h1="Emily Chang" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h1="Emily Chang" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h1="Floyd Miles" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h1="Samantha" span="Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time."/>
          <Reviews h1="Emily Chang" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h1="Samantha" span="Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time."/>
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="marquee-row mt-6">
        <div className="marquee-review marquee-right">
          <Reviews h6="Emily Chang" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h6="Emily Chang" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h6="Floyd Miles" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h6="Samantha" span="Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time."/>
          <Reviews h6="Emily Chang" span="As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are."/>
          <Reviews h6="Samantha" span="Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time."/>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
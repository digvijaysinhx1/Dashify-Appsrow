import React from "react";

import vector from "../../assets/CardVector.png";

const Card = (props) => {
  return (
    <div className="gradient-border relative w-85 h-109 rounded-2xl">
    <div className="absolute inset-0 z-10" style={{backgroundImage:`url(${vector})`}}/>

    <div className="img">
        <img src={props.icon} alt="icon" loading="lazy" className="absolute top-10 left-10" />
    </div>
    <div className="texts absolute top-52.5 left-10 w-68 h-fit flex flex-col gap-3">
        <h6 className="text-gray-950 font-medium text-[25px]" style={{fontFamily:"Instrument Sans"}}>{props.heading}</h6>
        <p className="text-gray-700 font-normal text-lg">{props.para}</p>
    </div>

    </div>
  );
};

export default Card;

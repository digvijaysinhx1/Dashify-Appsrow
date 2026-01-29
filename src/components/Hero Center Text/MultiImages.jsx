import React from "react";
import u1 from "../../assets/img1.png"
import u2 from "../../assets/img2.png"
import u3 from "../../assets/img3.png"
import u4 from "../../assets/img4.png"


const MultiImages = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center">
        <img
          src={u1}
          alt="user image"
          loading="lazy"
          className="w-8 h-8 rounded-full border border-white z-0 -rotate-8"
        />
        <img
          src={u2}
          alt="user image"
          loading="lazy"
          className="w-8 h-8 rounded-full border border-white -ml-2 z-1 -rotate-8"
        />
        <img
          src={u3}
          alt="user image"
          loading="lazy"
          className="w-8 h-8 rounded-full border border-white -ml-2 z-2 -rotate-8"
        />
        <img
          src={u4}
          alt="user image"
          loading="lazy"
          className="w-8 h-8 rounded-full border border-white -ml-2 z-3 -rotate-8"
        />

        <div className="w-8 h-8 rounded-full bg-[#5A50D8] text-[#FFFFFF] flex items-center justify-center text-xs font-semibold -ml-2 border border-white z-4">
          +
        </div>
      </div>


      <h1 className="text-sm text-gray-600 gap-1.5 font-medium flex items-center" style={{fontFamily:"Instrument Sans"}}>
        <p><span className="text-lg text-gray-950">50K</span> world wide users</p>
      </h1>
    </div>
  );
};

export default MultiImages;

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Sec7 = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="w-full px-15 flex flex-col mt-15 lg:flex-row lg:justify-between items-center lg:items-baseline gap-10 h-fit mb-10 bg-[#FCFCFC]">
      <div className="texts flex flex-col w-90 gap-3">
        <h3
          className="text-gray-950 font-medium text-3xl md:text-5xl"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Frequently asked questions
        </h3>
        <p className="font-normal text-gray-700 text-[18px]">
          Have questions? We’ve got answers. For everything else email us on{" "}
          <p className="text-[#5A50D8] font-bold underline">
            hi@gmail.com
          </p>
        </p>
      </div>
      <div className="FAQ flex flex-col gap-2">
        <div className="Question1 flex flex-col gap-5 p-10 rounded-2xl w-90 md:w-135 h-fit bg-[#EFF3FE] border border-[#5A50D8]">
          <button
            onClick={() => setOpen1((prev) => !prev)}
            className="heading flex justify-between items-center text-left"
          >
            <h6 className="font-medium text-gray-950 text-xl md:text-[25px]">
              How does Dashify work?
            </h6>

            {open1 ? <Minus /> : <Plus />}
          </button>

          {open1 && (
            <div className="text-gray-700 font-normal text-[16px]">
              <p>
                Dashify is like your team’s HQ. It brings all your
                communication, tasks, and files together in one easy-to-use
                place. It helps you work better together and get stuff done
                faster.
              </p>
            </div>
          )}
        </div>
        <div className="Question2 flex flex-col gap-5 p-10 rounded-2xl w-90 md:w-135 h-fit bg-[#F5F8FE] border border-gray-50">
          <button
            onClick={() => setOpen2((prev) => !prev)}
            className="heading flex justify-between items-center text-left"
          >
            <h6 className="font-medium text-gray-950 text-xl lg:text-[25px]">
              Is my data secure?
            </h6>

            {open2 ? <Minus /> : <Plus />}
          </button>
          {open2 && (
            <div className="text-gray-700 font-normal text-[16px]">
              <p>
                Dashify is like your team’s HQ. It brings all your
                communication, tasks, and files together in one easy-to-use
                place. It helps you work better together and get stuff done
                faster.
              </p>
            </div>
          )}
        </div>
        <div className="Question3 flex flex-col gap-5  p-10 rounded-2xl w-90 md:w-135 h-fit bg-[#F5F8FE] border border-gray-50">
          <button
            onClick={() => setOpen3((prev) => !prev)}
            className="heading flex justify-between items-center text-left"
          >
            <h6 className="font-medium text-gray-950 text-xl md:text-[25px]">
              Does Dashify work well for large teams?
            </h6>

            {open3 ? <Minus /> : <Plus />}
          </button>
          {open3 && (
            <div className="text-gray-700 font-normal text-[16px]">
              <p>
                Dashify is like your team’s HQ. It brings all your
                communication, tasks, and files together in one easy-to-use
                place. It helps you work better together and get stuff done
                faster.
              </p>
            </div>
          )}
        </div>
        <div className="Question4 flex flex-col gap-5  p-10 rounded-2xl w-90 md:w-135 h-fit bg-[#F5F8FE] border border-gray-50">
          <button
            onClick={() => setOpen4((prev) => !prev)}
            className="heading flex justify-between items-center text-left"
          >
            <h6 className="font-medium text-gray-950 text-xl md:text-[25px]">
              How do I create a new account?
            </h6>

            {open4 ? <Minus /> : <Plus />}
          </button>
          {open4 && (
            <div className="text-gray-700 font-normal text-[16px]">
              <p>
                Dashify is like your team’s HQ. It brings all your
                communication, tasks, and files together in one easy-to-use
                place. It helps you work better together and get stuff done
                faster.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sec7;

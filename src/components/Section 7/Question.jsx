import React, { useState } from "react";
import {Minus} from 'lucide-react'

const Question = () => {
  return (
    <div className="flex flex-col gap-5  p-10 rounded-2xl w-90 md:w-135 h-fit bg-[#EFF3FE] border border-[#5A50D8]">
      <div className="heading flex justify-between items-center">
        <h6 className="font-medium text-gray-950 text-xl md:text-[25px]" style={{fontFamily:"Instrument Sans"}}>How does Dashify work?</h6>
        <Minus/>
      </div>
      <div id="FaqPara" className="text-gray-700 font-normal text-[16px]">
        <p>Dashify is like your team’s HQ. It brings all your communication, tasks, and files together in one easy-to-use place. It helps you work better together and get stuff done faster.</p>
      </div>
    </div>
  )
}

export default Question

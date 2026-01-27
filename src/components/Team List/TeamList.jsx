import React from 'react'
import Tags2 from './Tags2'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const TeamList = (elem) => {
  return (
    <div className="hidden bg-white/20 backdrop-blur-sm h-70  absolute top-36 left-32 w-80 md:flex items-center justify-center rounded-[26px] rotate-8" >
      <div className="flex flex-col justify-center items-center border border-[#EFF3FE] bg-[#ffffff] gap-3 h-64 w-75 rounded-2xl">
       <span className="self-start font-semibold text-[#020202] text-lg ml-5">
          Team List
        </span>
        <div className="tags flex flex-col">
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Dianne Russell" span2="Marketing" bg="bg-[#EFF3FE]" img={img1}/>
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Bessie Cooper" span2="Design" bg="bg-[#FFF9EB]" img={img2}/>
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Floyd Miles" span2="Finance" bg="bg-[#EDFAFD]" img={img3}/>
        <Tags2 span1="Esther Howard" span2="Development" bg="bg-[#FDEFED]" img={img4}/>
        </div>
      </div>
    </div>
  )
}

export default TeamList

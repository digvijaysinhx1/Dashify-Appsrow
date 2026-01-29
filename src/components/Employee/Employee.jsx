import React from 'react'
import Users from '../../assets/users.png'
import Graph from "../../assets/Graph.png"
import {MoveUpRight} from 'lucide-react'

const Employee = () => {
  return (
    <div className= "hidden bg-white/20 backdrop-blur-sm h-50 w-80 absolute top-120 left-10 xl:left-50 lg:flex items-center justify-center rounded-[26px] rotate-10" >
      <div className="flex justify-around items-center border border-[#EFF3FE] bg-[#ffffff] gap-3 h-45 w-75 rounded-2xl">
        <div className="infos flex flex-col justify-center items-center">
            <div className="top flex justify-left items-center gap-2 font-semibold text-[16px] text-gray-950">
                <img src={Users} alt="users icon" loading='lazy' className='rotate-10' />
                <p>Employees</p>
            </div>
            <div className="bottom flex flex-col justify-center items-left gap-2">
            <h4 className="text-[39px] font-semibold">340</h4>
            <div className='flex justify-center items-center gap-2'>

                <p className='flex items-center justify-center gap-1 text-[#02C519] text-xs font-normal'><MoveUpRight className='h-4'/> 07.50%</p>
                <p className='text-gray-300 text-xs font-medium'>Last 6 Days</p>
            </div>
            </div>
        </div>
        <div className="graph">
            <img src={Graph} alt="graph image" loading='lazy' className='rotate-10 w-28 h-23.5' />
        </div>
      </div>
    </div>
  )
}

export default Employee

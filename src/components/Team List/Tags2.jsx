import React from 'react'
import img1 from '../../assets/img1.png'

const Tags2 = (props) => {
  return (
    <div className={`flex justify-between items-center xl:w-65 lg:w-55 h-11.5 ${props.border} ${props.borderColor1}`}>
      <div className='flex items-center font-medium text-sm gap-3 text-[#3D3D3D]'>
        <img src={props.img} alt="fake human image" loading='lazy' className='-rotate-8' />
        <p>{props.p1}</p>
      </div>
      <p className={`${props.bg} px-2 py-1 rounded-md text-xs font-normal text-gray-900`}>{props.p2}</p>
    </div>
  )
}

export default Tags2

import React from 'react'
import img1 from '../../assets/img1.png'

const Tags2 = (props) => {
  return (
    <div className={`flex justify-between items-center w-65 h-11.5 ${props.border} ${props.borderColor1}`}>
      <div className='flex items-center font-medium text-sm gap-3 text-[#3D3D3D]'>
        <img src={props.img} alt="fake human image" loading='lazy' className='-rotate-8' />
        <span>{props.span1}</span>
      </div>
      <span className={`${props.bg} px-2 py-1 rounded-md text-xs font-normal text-gray-900`}>{props.span2}</span>
    </div>
  )
}

export default Tags2

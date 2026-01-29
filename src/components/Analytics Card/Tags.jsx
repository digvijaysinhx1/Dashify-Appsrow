import React from 'react'

const Tags = (props) => {
  return (
    <div className={`tag flex gap-2 justify-between items-center border-l-3 ${props.borderColor} rounded-lg pl-3 bg-[#ffffff] h-6 w-65 font-medium text-sm text-[#3D3D3D]`}>
      <p className='w-48'>{props.p1}</p>
      <p>-</p>
      <p>{props.p2}</p>
    </div>
  )
}

export default Tags

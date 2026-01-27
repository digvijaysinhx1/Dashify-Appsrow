import React from 'react'

const Tags = (props) => {
  return (
    <div className={`tag flex gap-2 justify-between items-center border-l-3 ${props.borderColor} rounded-lg pl-3 bg-[#ffffff] h-6 w-65 font-medium text-sm`}>
      <span className='w-48'>{props.span1}</span>
      <span>-</span>
      <span>{props.span2}</span>
    </div>
  )
}

export default Tags

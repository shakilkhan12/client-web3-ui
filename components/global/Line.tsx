import React from 'react'

const Line = () => {
  return (
    <div className="w-full h-[1px] bg-gray-700 relative my-5">
     <span className="absolute top-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute right-10 top-0 w-5 h-[1px] bg-[#01ADED]"></span>
     </div>
  )
}

export default Line
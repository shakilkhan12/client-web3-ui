'use client'

import { CurrencySelect } from "@/components/select/CurrencySelect";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";

const SwapComponent = () => {
  const [percentage] = useState([
    {id: 1, value: 5},
    {id: 2, value: 10},
    {id: 3, value: 25},
    {id: 4, value: 50},
    {id: 5, value: 75},
    {id: 6, value: 100}
  ])
  return (
    <div className="bg-[#132542] w-full lg:w-[580px] p-6 rounded-[18px]">
     <div className="flex justify-between space-x-5 items-center">
     <h1 className="text-white text-[34px] capitalize font-medium">swap</h1>
     <CiSettings className="text-white cursor-pointer text-[24px]" />
     </div>
     <div className="mt-5">
     <div className="flex justify-between space-x-5">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">from</span>
      <div className="flex items-center space-x-2">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">balance:</span>
      <span className="text-white text-lg capitalize font-medium">9.23</span>
      <span className="text-white text-lg uppercase font-medium">usdc</span>
      </div>
     </div>
     </div>
     <div className="mt-5 w-full h-[54px] rounded-[8px] bg-[#2f3f59] flex items-center justify-between space-x-4 px-4">
      <span className="text-[22px] font-semibold text-white">0.00</span>
      <CurrencySelect />
     </div>
     <div className="mt-5 grid grid-cols-6 gap-4 items-center">
     {percentage.map(value => (
       <span key={value.id} className="flex items-center justify-center border border-white rounded-[6px] px-4 py-2 text-[15px] font-medium text-white">{value.value}%</span>
     ))}
   
     </div>
    </div>
  )
}

export default SwapComponent
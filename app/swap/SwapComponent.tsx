'use client'

import CurrencyInput from "@/components/input/CurrencyInput";
import InputSelect from "@/components/input/InputSelect";
import { CurrencySelect } from "@/components/select/CurrencySelect";
import Image from "next/image";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";
import ToComponent from "./ToComponent";


const SwapComponent = () => {
  const [percentage] = useState([
    {id: 1, value: 5},
    {id: 2, value: 10},
    {id: 3, value: 25},
    {id: 4, value: 50},
    {id: 5, value: 75},
    {id: 6, value: 100}
  ])
  const [active, setActive] = useState(null)
  const [amount, setAmount] = useState(0)
  const onChange = (e: any) => {
    setAmount(e.target.value)
  }
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
     <InputSelect>
     <CurrencyInput value={amount} onChange={onChange} />
     <CurrencySelect />
     </InputSelect>
     <div className="mt-5 grid grid-cols-6 gap-4 items-center">
     {percentage.map(value => (
       <span key={value.id} className={`flex items-center justify-center border border-white rounded-[6px] px-4 py-2 text-[15px] font-medium text-white cursor-pointer ${active === value.id && 'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] border-transparent'}`} onClick={() => setActive(value.id)}>{value.value}%</span>
     ))}
     </div>
     <div className="my-10 flex items-center space-x-7 border-y border-gray-700 py-8 relative">
     
      <span className="absolute bottom-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute right-10 bottom-0 w-5 h-[1px] bg-[#01ADED]"></span>

      <span className="absolute top-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute top-0 right-10 bottom-0 w-5 h-[1px] bg-[#01ADED]"></span>
      <div className="flex-1">
        <Image src="/images/line.png" width={203} height={8} alt="line" />
        <Image src="/images/line2.png" width={203} height={8} alt="line" className="mt-1" />
      </div>
      <button className="w-[68px] h-[68px] flex items-center justify-center rounded-full bg-[#113253] mx-auto">
                <span className="w-[58px] h-[58px] rounded-full bg-[#02ABEA] flex items-center justify-center">
                  <LuArrowLeftRight className="rotate-90" color="white" size={25} />
                </span>
              </button>
      <div className="flex-1">
        <Image src="/images/right-white.png" width={203} height={8} alt="line" />
        <Image src="/images/right-blue.png" width={203} height={8} alt="line" className="mt-1" />
      </div>
     </div>
     <div>
      <ToComponent />
      <div className="mt-8">
        <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-[40px] h-[54px] px-6 capitalize text-lg text-white block w-full">swap</button>
      </div>
     </div>
    </div>
  )
}

export default SwapComponent
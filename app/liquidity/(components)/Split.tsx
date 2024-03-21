'use client'

import { useState } from "react";
import { CiCircleMinus, CiCirclePlus, CiWarning } from "react-icons/ci"

const Split = () => {
  const [state, setState] = useState(1);
  return (
    <div className="w-full">
        <div className="flex items-center mt-4 bg-[#2f3f59] h-[54px] rounded-[8px] px-4">
            <div className="flex items-center space-x-3 ">
                <span className="text-lg text-white capitalize">min</span>
                 <span className="text-white">|</span>
                <CiCircleMinus color="white" className="cursor-pointer" size={22} onClick={() => setState(state-1)} />

            </div>
            <span className="flex-1 text-center text-white text-lg">{state}</span>
            <div className="flex items-center space-x-3 ">
            <CiCirclePlus color="white" className="cursor-pointer" size={22} onClick={() => setState(state+1)} />
                 <span className="text-white">|</span>
                 <span className="text-lg text-white capitalize">max</span>

            </div>
        </div>
        <div className="flex items-center justify-between space-x-3 h-[54px] rounded-[8px] bg-[#2f3f59] mt-4 px-4">
          <span className="text-white text-lg ">01</span>
          <span className="text-white text-lg ">-LPS</span>
          <span className="text-white text-lg ">50%</span>
        </div>
        <div className="flex items-center justify-between space-x-3 h-[54px] rounded-[8px] bg-[#2f3f59] mt-4 px-4">
          <span className="text-white text-lg ">01</span>
          <span className="text-white text-lg ">-LPS</span>
          <span className="text-white text-lg ">50%</span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="text-base text-[#8093AF]">Total distribution:</span>
          <span className="text-white">100%</span>
        </div>
        <button className="mt-4 btn-gradient capitalize text-white block w-full h-[54px] rounded-full text-xl font-medium">split token</button>
        <div className="mt-5 flex space-x-3">
        <CiWarning color="#FFD47C" size={20} />
        <p className="text-sm text-[#8093AF]">Merging/splitting will cause a loss of unclaimed and pending rewards, make sure to claim everything beforehand.</p>
        </div>
    </div>
  )
}

export default Split
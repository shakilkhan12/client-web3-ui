'use client'
import { GoQuestion } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowsUpToLine } from "react-icons/fa6";
import { useState } from "react";


type PropTypes = {
  state: boolean;
  toggle: () => void;
}
const LiquiditySetting = ({state, toggle}: PropTypes) => {
    const [values, setValues] = useState([
        {id: 1, val: 0.1},
        {id: 2, val: 0.5},
        {id: 3, val: 0.5},
        {id: 4, val: 'custom'},
    ])
  return state ? (
    <div className="fixed inset-0 w-full h-full bg-black/30 backdrop-blur flex items-center justify-center px-2 py-4 lg:p-6 z-[9999999999999999]">
      <div className='bg-[#132542] w-full lg:w-[636px] rounded-[16px] p-4 lg:px-8 lg:pb-8 lg:pt-5 max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-[#132542]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#01DAD6] relative
  '>
    <div className="flex items-center space-x-2 justify-between">
      <span className="font-medium text-xl md:text-[34px] text-white capitalize">setting</span> 
      <IoIosCloseCircleOutline color="white" size={30} className="cursor-pointer" onClick={toggle} />
    </div>
     <div className="mt-4">
        <div className="flex items-center space-x-3">
            <span className="text-lg text-white capitalize">Max Slippage</span>
            <GoQuestion color="#02ABEA" size={12} className="cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {values.map(item => (
            <span key={item.id} className="border rounded-full h-[54px] border-white px-4 text-lg capitalize flex items-center text-white justify-center cursor-pointer">{item.val} %</span>
          ))}
        </div>
        <button className="mt-5 btn-gradient h-[54px] rounded-[40px] text-white text-lg font-medium capitalize w-full block">apply</button>
     </div>
    </div>
    </div>
  ) : ''
}

export default LiquiditySetting
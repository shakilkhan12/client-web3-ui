'use client'
import { GoQuestion } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowsUpToLine } from "react-icons/fa6";


type PropTypes = {
  state: boolean;
  toggle: () => void;
}
const DepositeOptionsModel = ({state, toggle}: PropTypes) => {
  return state ? (
    <div className="fixed inset-0 w-full h-full bg-black/30 backdrop-blur flex items-center justify-center px-2 py-4 lg:p-6 z-[9999999999999999]">
      <div className='bg-[#132542] w-full lg:w-[636px] rounded-[16px] p-4 lg:px-8 lg:pb-8 lg:pt-5 max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-[#132542]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#01DAD6] relative
  '>
    <div className="flex items-center space-x-2 justify-between">
      <div className="flex items-center space-x-2">
      <span className="font-medium text-xl text-white capitalize">deposite options</span> <GoQuestion color="#02ABEA" size={12} className="cursor-pointer" />
      </div>
      <IoIosCloseCircleOutline color="white" size={30} className="cursor-pointer" onClick={toggle} />
    </div>
      <div className="mt-5">
        <button className="btn-gradient rounded-full text-white h-[54px] capitalize block w-full">deposite</button>
        <button className="mt-6 bg-transparent rounded-full text-white h-[54px] capitalize flex justify-center px-4 w-full items-center space-x-2 border text-lg"><span className="underline">ve</span> <span>deposite & stake</span></button>
        <button className="mt-6 bg-transparent rounded-full text-white h-[54px] capitalize flex justify-center px-4 w-full items-center space-x-2 border text-lg"><FaArrowsUpToLine color="text-white" />
 <span>deposite & boosted stake</span></button>
      </div>
    </div>
    </div>
  ) : ''
}

export default DepositeOptionsModel
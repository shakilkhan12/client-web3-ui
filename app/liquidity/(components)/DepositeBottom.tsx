'use client'
import { Switch } from "@/components/ui/switch";
import { GoQuestion } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import DepositeOptionsModel from "@/components/models/DepositeOptionsModel";
import { useState } from "react";
import Image from "next/image";
const DepositeBottom = () => {
   const [depositeModel, setDepositeModel] = useState(false)
   const toggleModel = () => {
    setDepositeModel(!depositeModel)
   }
  return (
   <>
    <div className="mt-7">
        <div className="flex items-center gap-3 justify-between">
            <div className="flex gap-2 items-center"><span className="text-white text-lg">Add tokens in equal proportion</span><GoQuestion color="#02ABEA" size={12} className="cursor-pointer" /></div>
            <Switch id="switch" className="!bg-[#2f3f59]" />
        </div>
        <button className="btn-gradient rounded-full h-[45px] flex items-center space-x-2 justify-center px-4 w-full text-white capitalize mt-6" onClick={toggleModel}><span className="font-medium text-xl">deposite options</span> <CiCirclePlus size={18} /></button>
    </div>
    <div className="mt-8">
        <div className="flex items-center justify-between space-x-2">
            <span className="text-white text-lg">Minimium LP Tokens:</span>
            <div className="flex items-center space-x-2">
                <span className="text-white text-lg">45646</span>
                <GoQuestion color="#02ABEA" size={12} className="cursor-pointer" />
            </div>
        </div>
        <div className="flex items-center justify-between space-x-2 mt-4">
            <span className="text-white text-lg">Slippage:</span>
            <div className="flex items-center space-x-2">
                <span className="text-white text-lg">0.008%</span>
                <FaRegEdit color="#02ABEA" size={12} className="cursor-pointer" />
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-700 relative my-8">
     <span className="absolute top-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute right-10 top-0 w-5 h-[1px] bg-[#01ADED]"></span>
     </div>
     <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6 items-end">
        <div>
            <span className="text-[#01DAD6] font-medium text-lg uppercase block">tvl</span>
            <span className="text-white uppercase text-lg block mt-1">25.64m</span>
        </div>
        <div className="flex items-center space-x-2">
            <Image src="/images/eth-small.png" alt="eth" width={16} height={16} />
            <span className="text-white uppercase text-lg">8.94 eth</span>
        </div>
        <div className="flex items-center space-x-2">
            <Image src="/images/usdc-small.png" alt="eth" width={16} height={16} />
            <span className="text-white uppercase text-lg ">12.83m usdc</span>
        </div>
     </div>
     <div className="mt-5">
        <span className="block text-main font-medium text-lg capitalize">Liquidity Incentives</span>
        <div className="flex items-center gap-5 mt-2">
            <span className="text-white text-lg">$5.82K/day</span>
            <span className="text-white text-lg flex items-center space-x-3"><Image alt="c icon" src="/images/c.png" width={16} height={16} /> <span>12.34K BUC</span></span>
        </div>
     </div>
    </div>
    <DepositeOptionsModel state={depositeModel} toggle={toggleModel} />
   </>
  )
}

export default DepositeBottom
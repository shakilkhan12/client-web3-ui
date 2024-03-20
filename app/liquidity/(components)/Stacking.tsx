'use client'

import Line from "@/components/global/Line"
import BalanceInput from "./BalanceInput"
import { FaArrowsUpToLine } from "react-icons/fa6"

const Stacking = () => {
  return (
    <div>
        <BalanceInput />
        <Line />
        <div className="mt-4">
        <button className="btn-gradient rounded-full h-[45px] flex items-center space-x-2 justify-center px-4 w-full text-white capitalize mt-6" >withdraw</button>
        <button className="mt-6 bg-transparent rounded-full text-white h-[54px] capitalize flex justify-center px-4 w-full items-center space-x-2 border text-lg"><FaArrowsUpToLine color="text-white" />
 <span>boosked stake</span></button>
        </div>
    </div>
  )
}

export default Stacking
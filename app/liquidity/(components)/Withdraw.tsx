'use client'

import Line from "@/components/global/Line"
import BalanceInput from "./BalanceInput"
import Image from "next/image"
import { LuArrowLeftRight } from "react-icons/lu"

const Withdraw = () => {
  return (
    <div>
        <BalanceInput />
        <Line />
        <div className="flex items-center space-x-7">
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
    </div>
  )
}

export default Withdraw
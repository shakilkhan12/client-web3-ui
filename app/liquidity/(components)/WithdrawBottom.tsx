'use client'

import TokenInput from "@/components/input/TokenInput"
import AddTokens from "./AddTokens"
import CommonText from "./CommonText"

const WithdrawBottom = () => {
  return (
    <>
       <div>
       
       </div>
       <TokenInput />
       <div className="mt-2">
        <span className="text-[#8093AF] capitalize">balance:</span>
       <span className="text-white">9.23 ETH . Maximum</span>
     </div>
       <div className="w-full mt-4">
       <TokenInput />
       <div className="mt-2">
        <span className="text-[#8093AF] capitalize">balance:</span>
       <span className="text-white">4.21 BNB . Maximum</span>
     </div>
       </div>
       <div className="my-4">
        <AddTokens />
       </div>
       <button className="btn-gradient rounded-full h-[45px] flex items-center space-x-2 justify-center px-4 w-full text-white capitalize mt-6" >withdraw</button>
       <div className="mt-5">
        <CommonText />
       </div>
    </>
  )
}

export default WithdrawBottom
import ShapsTop from "@/components/global/ShapsTop"
import { TokenTypes } from "@/types";
import Image from "next/image";
import { RiExchangeDollarFill } from "react-icons/ri";
type PropTypes = {
    price: number;
    minimum: number;
    priceImpact: number;
    selectedToken: TokenTypes | null
}
const Result = ({price, minimum, priceImpact, selectedToken}: PropTypes) => {
  return (
    <div className="mt-5">
        <div className="flex items-center justify-between gap-2 border-t border-gray-700 relative pt-3">
        <ShapsTop />
        <span className="capitalize text-lg text-white">price</span>
        <span className="capitalize text-lg text-white">{price} FTM</span>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-gray-700 relative pt-3 mt-3">
        <ShapsTop />
        <span className="capitalize text-lg text-white">Minimum received</span>
        <span className="capitalize text-lg text-white">{minimum} FTM</span>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-gray-700 relative pt-3 mt-3">
        <ShapsTop />
        <span className="capitalize text-lg text-white">price impact</span>
        <span className="capitalize text-lg text-white">{priceImpact}%</span>
        </div>
       {selectedToken &&  <div className="flex items-center justify-center gap-3 mt-7 w-full sm:w-[410px] mx-auto">
        <span className="flex items-center justify-center w-[50px] h-[50px] bg-[#2775CA] rounded-full"><RiExchangeDollarFill size={36} color="white" /></span>
        <div className="flex-1 relative w-full sm:w-[393px] h-[8px]">
        <Image src="/images/double.png" fill className="w-full h-full object-fill" alt="line" />
      </div>
      <span className={`flex items-center justify-center w-[50px] h-[50px] ${selectedToken.background} rounded-full`}>
        {selectedToken?.icon}
      </span>
       </div>}
        
    </div>
  )
}

export default Result
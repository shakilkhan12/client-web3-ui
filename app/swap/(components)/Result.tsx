import ShapsTop from "@/components/global/ShapsTop"
import { selectedToken } from "@/store/slices/globalSlice";
import { TokenTypes } from "@/types";
import Image from "next/image";
import { RiExchangeDollarFill } from "react-icons/ri";
import { useSelector } from "react-redux";
type PropTypes = {
    price: number;
    minimum: number;
    priceImpact: number;
}
const Result = ({price, minimum, priceImpact}: PropTypes) => {
  const selectedTokenData = useSelector(selectedToken)
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
       {selectedTokenData &&  <div className="flex items-center justify-center gap-3 mt-7 w-full sm:w-[410px] mx-auto">
       <Image src={selectedTokenData.icon} width={50} height={50} alt="icon" />
        <div className="flex-1 relative w-full sm:w-[393px] h-[8px]">
        <Image src="/images/double.png" fill className="w-full h-full object-fill" alt="line" />
      </div>
      <Image src={selectedTokenData.icon} width={50} height={50} alt="icon" />
       </div>}
        
    </div>
  )
}

export default Result
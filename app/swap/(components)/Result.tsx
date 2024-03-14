import ShapsTop from "@/components/global/ShapsTop"
type PropTypes = {
    price: number;
    minimum: number;
    priceImpact: number;
}
const Result = ({price, minimum, priceImpact}: PropTypes) => {
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
    </div>
  )
}

export default Result
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md"


const Table = () => {
  return (
    <div className="w-full overflow-x-auto overflow-y-auto [&::-webkit-scrollbar]:w-1.5
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-[#132542]
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-[#01DAD6]">
        <table className="w-full">
            <thead>
                <tr className="border-b border-b-gray-700">
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 pr-10">token name</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">TVL</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">APR</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">my pool</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">my stack</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3"></th>
                </tr>
            </thead>
            <tbody>
                {[1,2,3,4,5,6,7].map(item => (
                    <tr className="border-b border-b-gray-700">
                        <td className="py-3 pr-10">
                            <div className="flex items-center gap-4">
                                <div className="flex">
                                    <div className="relative w-[28px] h-[28px]">
                                    <Image src='/images/eth.png' alt="eth" fill className="object-contain"  />
                                    </div>
                                    <div className="relative w-[28px] h-[28px]">
                                    <Image src='/images/btc.png' alt="btc" fill className="object-contain -ml-1.5"  />
                                    </div>
                                
                               
                                </div>
                                <div className="flex-1 ">
                                    <span className="font-medium text-white ">ETH/BTC</span>
                                    <span className="text-[#8093AF] text-xs font-medium block">Volatile</span>
                                </div>
                            </div>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white">$29.83</span>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white">17.7%</span>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white">-</span>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white">-</span>
                        </td>
                        <td className="py-3 px-3">
                        <MdKeyboardArrowRight color="white" className="cursor-pointer" />

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
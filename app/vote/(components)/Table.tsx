'use client'

import Image from "next/image"

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
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">Total Votes</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">APR</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">Rewards</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">Estimation</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3">Your Votes</th>
                    <th className="text-left text-[#01DAD6] text-xs md:text-lg font-normal capitalize pb-2 px-3"></th>
                </tr>
            </thead>
            <tbody>
                {[1,2,3].map(item => (
                    <tr className="border-b border-b-gray-700 ">
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
                            <span className="text-white text-center block ">50.120</span>
                            <span className=" text-center text-[#01DAD6] text-[10px] block">1%</span>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white">120.12%</span>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white">1.97k$</span>
                        </td>
                        <td className="py-3 px-3">
                            <span className="text-white block text-center">100.67$</span>
                            <span  className=" text-center text-[#01DAD6] text-[10px] block">Per 1k Votes</span>
                        </td>
                        <td className="py-3 px-3">
                        <span className="text-white text-center block">10K</span>
                            <span  className=" text-center text-[#01DAD6] text-[10px] block">10%</span>

                        </td>
                        <td className="py-3 px-3">
                        <span className="bg-[#2f3f59] rounded-[8px] h-[54px] px-4 flex items-center gap-2">
                            <span className="text-white">0.00</span>
                            <span className="text-[#01DAD6]">max</span>
                        </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
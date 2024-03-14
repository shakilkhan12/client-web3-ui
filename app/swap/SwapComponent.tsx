'use client'

import CurrencyInput from "@/components/input/CurrencyInput";
import InputSelect from "@/components/input/InputSelect";
import { CurrencySelect } from "@/components/select/CurrencySelect";
import Image from "next/image";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";
import ToComponent from "./ToComponent";
import { SiBinance, SiFantom, SiTether } from "react-icons/si";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TokenTypes } from "@/types";


const SwapComponent = () => {
  const [percentage] = useState([
    {id: 1, value: 5},
    {id: 2, value: 10},
    {id: 3, value: 25},
    {id: 4, value: 50},
    {id: 5, value: 75},
    {id: 6, value: 100}
  ])
  const [active, setActive] = useState(0)
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [tokens] = useState<TokenTypes[]>([
    {id: 1, currency:'BNB', name: 'Binance coin', value: 1.2, icon: <SiBinance size={24} color="white" />, background: 'bg-[#F3BA2F]'},
    {id: 2, currency:'ftm', name: 'Fantom', value: 10.242, icon: <SiFantom size={24} color="white" />, background: 'bg-[#13b5ec]'},
    {id: 3, currency:'usdc', name: 'USD coin', value: 7000.242, icon: <PiCurrencyCircleDollar size={26} color="white" />, background: 'bg-[#2775CA]'},
    {id: 4, currency:'usdt', name: 'Tather USD', value: 0.03, icon: <SiTether size={26} color="white" />, background: 'bg-[#26A17B]'},
    {id: 5, currency:'btcb', name: 'Bitcoin', value: 1.00004, icon: <BsCurrencyBitcoin className='rotate-12' size={26} color="white" />, background: 'bg-yellow-600'},
])
const [selectedToken, setSelectedToken] = useState<TokenTypes|null>(null)
console.log(selectedToken)
  const onChangeTo = (e: any) => {
    setTo(e.target.value)
  }
  const onChange = (e: any) => {
    setFrom(e.target.value)
  }
  return (
    <div className="bg-[#132542] w-full lg:w-[580px] p-6 rounded-[18px]">
     <div className="flex justify-between space-x-5 items-center">
     <h1 className="text-white text-[34px] capitalize font-medium">swap</h1>
     <CiSettings className="text-white cursor-pointer text-[24px]" />
     </div>
     <div className="mt-5">
     <div className="flex justify-between space-x-5">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">from</span>
      <div className="flex items-center space-x-2">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">balance:</span>
      <span className="text-white text-lg capitalize font-medium">9.23</span>
      <span className="text-white text-lg uppercase font-medium">usdc</span>
      </div>
     </div>
     </div>
     <InputSelect>
     <CurrencyInput value={from} onChange={onChange} />
     <CurrencySelect />
     </InputSelect>
     <div className="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
     {percentage.map(value => (
       <span key={value.id} className={`flex items-center justify-center border border-white rounded-[6px] px-4 py-2 text-[15px] font-medium text-white cursor-pointer ${active === value.id && 'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] border-transparent'}`} onClick={() => setActive(value.id)}>{value.value}%</span>
     ))}
     </div>
     <div className="my-10 flex items-center space-x-7 border-y border-gray-700 py-8 relative">
     
      <span className="absolute bottom-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute right-10 bottom-0 w-5 h-[1px] bg-[#01ADED]"></span>

      <span className="absolute top-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute top-0 right-10 bottom-0 w-5 h-[1px] bg-[#01ADED]"></span>
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
     <div>
      <ToComponent onChange={onChangeTo} to={to} tokens={tokens} selectedToken={selectedToken} setSelectedToken={setSelectedToken} />
      <div className="mt-8">
        <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-[40px] h-[54px] px-6 capitalize text-lg text-white block w-full">swap</button>
      </div>
     </div>
    </div>
  )
}

export default SwapComponent
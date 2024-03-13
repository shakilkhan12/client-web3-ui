import React, {useState} from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci'
import { PiCurrencyCircleDollar } from 'react-icons/pi';
import { SiBinance, SiFantom, SiTether } from "react-icons/si";

const ModelContent = () => {
    const [state] = useState([
        {id: 1, currency:'BNB', name: 'Binance coin', value: 1.2, icon: <SiBinance size={24} color="white" />, background: 'bg-[#F3BA2F]'},
        {id: 2, currency:'ftm', name: 'Fantom', value: 10.242, icon: <SiFantom size={24} color="white" />, background: 'bg-[#13b5ec]'},
        {id: 3, currency:'usdc', name: 'USD coin', value: 7000.242, icon: <PiCurrencyCircleDollar size={26} color="white" />, background: 'bg-[#2775CA]'},
        {id: 4, currency:'usdt', name: 'Tather USD', value: 0.03, icon: <SiTether size={26} color="white" />, background: 'bg-[#26A17B]'},
        {id: 5, currency:'btcb', name: 'Bitcoin', value: 1.00004, icon: <BsCurrencyBitcoin className='rotate-12' size={26} color="white" />, background: 'bg-yellow-600'},
    ])
  return (
    <div>
         <div className='mt-10 bg-[#2f3f59] h-[54px] rounded-full flex items-center px-5 space-x-5'>
            <CiSearch className='' color="white" size={23} />
              <input type="text" className='bg-[#2f3f59] outline-none flex-1 text-white' placeholder='Search by name, symbol or address' />
            </div>
            <div>
              {state.map(item => {
  
                return (
                  <div className='flex items-center space-x-5 mt-8 border-b border-gray-700 pb-3 relative cursor-pointer'>
                    <span className="absolute bottom-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
                   <span className="absolute right-10 bottom-0 w-5 h-[1px] bg-[#01ADED]"></span>
                    <span className={`flex items-center justify-center rounded-full w-[42px] h-[42px] ${item.background}`}>{item.icon}</span>
                    <span className='uppercase text-white text-2xl font-medium'>{item.currency}</span>
                    <span className='flex-1 text-center text-[#8093AF] text-lg'>{item.name}</span>
                    <span className='text-white text-lg font-medium'>{item.value}</span>
                  </div>
                )
              })}
            </div>
    </div>
  )
}

export default ModelContent
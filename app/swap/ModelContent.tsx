import { TokenTypes } from '@/types';
import React from 'react'
import { CiSearch } from 'react-icons/ci'
type PropTypes = {
  tokens: TokenTypes[],
  selectedToken: TokenTypes | null,
  setSelectedToken: (value: TokenTypes) => void;
  toggleModel: () => void
}
const ModelContent = ({tokens, selectedToken, setSelectedToken, toggleModel}: PropTypes) => {
  
  return (
    <div>
         <div className='mt-10 bg-[#2f3f59] h-[54px] rounded-full flex items-center px-5 space-x-5'>
            <CiSearch className='' color="white" size={23} />
              <input type="text" className='bg-[#2f3f59] outline-none flex-1 text-white' placeholder='Search by name, symbol or address' />
            </div>
            <div>
              {tokens.map(item => {
  
                return (
                  <div onClick={() => {
                    setSelectedToken(item)
                    toggleModel()
                  }} className='flex items-center space-x-5 mt-8 border-b border-gray-700 pb-3 relative cursor-pointer'>
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
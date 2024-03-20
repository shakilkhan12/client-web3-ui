'use client'

import CurrencyInput from "@/components/input/CurrencyInput"
import InputSelect from "@/components/input/InputSelect"
import Model from "@/components/models/Model"
import ModelContent from "@/components/models/ModelContent"
import { CurrencySelect } from "@/components/select/CurrencySelect"
import { selectedToken, toggleModel } from "@/store/slices/globalSlice"
import Image from "next/image"
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

const Deposite = () => {
    const [state, setState] = useState(0)
    const [state2, setState2] = useState(0)
    const onChange = (e: any) => {
        setState(e.target.value)
      }
    const onChange2 = (e: any) => {
        setState2(e.target.value)
      }
    const dispatch = useDispatch();
    const selectedTokenData = useSelector(selectedToken)
    
  return (
    <div>
      <Model label="Select a Token">
      <ModelContent  />
    </Model>
        <InputSelect>
     <CurrencyInput value={state} onChange={onChange} />
     <div className='flex items-center border border-white rounded-lg space-x-1 cursor-pointer min-w-[125px] h-[42px] justify-center px-3' onClick={() => dispatch(toggleModel())}>
        <span className='text-[10px] w-full block  text-white capitalize'>{selectedTokenData ? <div className='flex items-center space-x-2'> <Image src={selectedTokenData.icon} width={30} height={30} alt="icon" /><span className='uppercase text-xs font-medium'>{selectedTokenData.currency}</span></div> : 'select token'}</span>
        <MdKeyboardArrowDown className='text-white text-lg' />

    </div>
     </InputSelect>
     <div className="mt-2">
        <span className="text-[#8093AF] capitalize">balance:</span>
       <span className="text-white">9.23 ETH . Maximum</span>
     </div>
     {/* second input */}
     <InputSelect>
     <CurrencyInput value={state2} onChange={onChange2} />
     <div className='flex items-center border border-white rounded-lg space-x-1 cursor-pointer min-w-[125px] h-[42px] justify-center px-3' onClick={() => dispatch(toggleModel())}>
        <span className='text-[10px] w-full block  text-white capitalize'>{selectedTokenData ? <div className='flex items-center space-x-2'> <Image src={selectedTokenData.icon} width={30} height={30} alt="icon" /><span className='uppercase text-xs font-medium'>{selectedTokenData.currency}</span></div> : 'select token'}</span>
        <MdKeyboardArrowDown className='text-white text-lg' />

    </div>
     </InputSelect>
     <div className="mt-2">
        <span className="text-[#8093AF] capitalize">balance:</span>
       <span className="text-white">4.21 BNB . Maximum</span>
     </div>
     <div className="w-full h-[1px] bg-gray-700 relative my-5">
     <span className="absolute top-0 left-10 w-5 h-[1px] bg-[#01ADED]"></span>
      <span className="absolute right-10 top-0 w-5 h-[1px] bg-[#01ADED]"></span>
     </div>
    </div>
  )
}

export default Deposite
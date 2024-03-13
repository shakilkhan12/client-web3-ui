import CurrencyInput from '@/components/input/CurrencyInput'
import InputSelect from '@/components/input/InputSelect'
import Model from '@/components/models/Model'
import { CurrencySelect } from '@/components/select/CurrencySelect'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ModelContent from './ModelContent'

const ToComponent = () => {
    const [to, setTo] = useState(0)
    const onChange = (e: any) => {
      setTo(e.target.value)
    }
    const [modelState, setModelState] = useState(false);
    const toggleModel = () => {
      setModelState(!modelState)
    }
  return (
    <>
    <div className="flex justify-between space-x-5">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">to</span>
      <div className="flex items-center space-x-2">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">balance:</span>
      <span className="text-white text-lg capitalize font-medium">9.23</span>
      <span className="text-white text-lg uppercase font-medium">usdc</span>
      </div>
     </div>
     <InputSelect>
    <CurrencyInput value={to} onChange={onChange} />
    <div className='flex items-center border border-white rounded-lg space-x-3 cursor-pointer min-w-[125px] h-[42px] justify-center px-3' onClick={() => toggleModel(!modelState)}>
        <span className='text-xs text-white capitalize'>select token</span>
        <MdKeyboardArrowDown className='text-white text-lg' />

    </div>
    </InputSelect>
    <Model label="Select a Token" toggleModel={toggleModel} modelState={modelState}>
      <ModelContent />
    </Model>
    </>
    
  )
}

export default ToComponent
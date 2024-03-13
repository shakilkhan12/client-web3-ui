import CurrencyInput from '@/components/input/CurrencyInput'
import InputSelect from '@/components/input/InputSelect'
import Model from '@/components/models/Model'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ModelContent from './ModelContent'
import { TokenTypes } from '@/types'
type PropTypes = {
  onChange: (e: any) => void;
  to: number;
  tokens: TokenTypes[]
  selectedToken: TokenTypes | null,
  setSelectedToken: (value: TokenTypes) => void;
}
const ToComponent = ({onChange, to, tokens, selectedToken, setSelectedToken}: PropTypes) => {
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
    <div className='flex items-center border border-white rounded-lg space-x-3 cursor-pointer min-w-[125px] h-[42px] justify-center px-3' onClick={() => toggleModel()}>
        <span className='text-xs text-white capitalize'>{selectedToken ? <div className='flex items-center space-x-2'> <span className={`flex items-center justify-center rounded-full w-[30px] h-[30px] ${selectedToken.background}`}>{selectedToken.icon}</span> <span className='uppercase text-xs font-medium'>{selectedToken.currency}</span></div> : 'select token'}</span>
        <MdKeyboardArrowDown className='text-white text-lg' />

    </div>
    </InputSelect>
    <Model label="Select a Token" toggleModel={toggleModel} modelState={modelState}>
      <ModelContent tokens={tokens} selectedToken={selectedToken} setSelectedToken={setSelectedToken} toggleModel={toggleModel} />
    </Model>
    </>
    
  )
}

export default ToComponent
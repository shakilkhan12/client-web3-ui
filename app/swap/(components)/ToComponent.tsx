import CurrencyInput from '@/components/input/CurrencyInput'
import InputSelect from '@/components/input/InputSelect'
import Model from '@/components/models/Model'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { selectedToken, toggleModel } from '@/store/slices/globalSlice'
import ModelContent from "../../../components/models/ModelContent"
import Image from 'next/image'
type PropTypes = {
  onChange: (e: any) => void;
  to: number;
}
const ToComponent = ({onChange, to}: PropTypes) => {
  const dispatch = useDispatch()
  const selectedTokenData = useSelector(selectedToken)

  return (
    <>
    <div className="flex justify-between space-x-5">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">to</span>
      <div className="flex items-center space-x-2">
      <span className="text-[#01DAD6] text-lg capitalize font-medium">balance:</span>
      {!selectedTokenData?.value  ? <span className='text-white'>-----</span> : <><span className="text-white text-lg capitalize font-medium">{selectedTokenData?.value}</span>
      <span className="text-white text-lg uppercase font-medium">{selectedTokenData?.currency}</span></>}
      
      </div>
     </div>
     <InputSelect>
    <CurrencyInput value={to} onChange={onChange} />
    <div className='flex items-center border border-white rounded-lg space-x-1 cursor-pointer min-w-[125px] h-[42px] justify-center px-3' onClick={() => dispatch(toggleModel())}>
        <span className='text-[10px] w-full block  text-white capitalize'>{selectedTokenData ? <div className='flex items-center space-x-2'>  <Image src={selectedTokenData.icon} width={24} height={24} alt="icon" /> <span className='uppercase text-xs font-medium'>{selectedTokenData.currency}</span></div> : 'select token'}</span>
        <MdKeyboardArrowDown className='text-white text-lg' />

    </div>
    </InputSelect>
    <Model label="Select a Token">
      <ModelContent  />
    </Model>
    </>
    
  )
}

export default ToComponent
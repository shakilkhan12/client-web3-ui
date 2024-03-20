'use client'
import { MdKeyboardArrowDown } from "react-icons/md"
import CurrencyInput from "./CurrencyInput"
import InputSelect from "./InputSelect"
import { useDispatch, useSelector } from "react-redux"
import { selectedToken, toggleModel } from "@/store/slices/globalSlice"
import { useState } from "react"
import Image from "next/image"
import Model from "../models/Model"
import ModelContent from "../models/ModelContent"

const TokenInput = () => {
    const [state, setState] = useState(0)
    const selectedTokenData = useSelector(selectedToken)
    const dispatch = useDispatch()
    const onChange = (e: any) => {
        setState(e.target.value)
      }
  return (
 <>
    <InputSelect>
    <CurrencyInput value={state} onChange={onChange} />
    <div className='flex items-center border border-white rounded-lg space-x-1 cursor-pointer min-w-[125px] h-[42px] justify-center px-3' onClick={() => dispatch(toggleModel())}>
       <span className='text-[10px] w-full block  text-white capitalize'>{selectedTokenData ? <div className='flex items-center space-x-2'> <Image src={selectedTokenData.icon} width={30} height={30} alt="icon" /><span className='uppercase text-xs font-medium'>{selectedTokenData.currency}</span></div> : 'select token'}</span>
       <MdKeyboardArrowDown className='text-white text-lg' />

   </div>
    </InputSelect>
    <Model label="Select a Token">
    <ModelContent  />
  </Model>
 </>
  )
}

export default TokenInput
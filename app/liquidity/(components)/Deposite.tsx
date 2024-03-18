'use client'

import CurrencyInput from "@/components/input/CurrencyInput"
import InputSelect from "@/components/input/InputSelect"
import { CurrencySelect } from "@/components/select/CurrencySelect"
import { useState } from "react"

const Deposite = () => {
    const [state, setState] = useState(0)
    const [state2, setState2] = useState(0)
    const onChange = (e: any) => {
        setState(e.target.value)
      }
    const onChange2 = (e: any) => {
        setState2(e.target.value)
      }
  return (
    <div>
        <InputSelect>
     <CurrencyInput value={state} onChange={onChange} />
     <CurrencySelect />
     </InputSelect>
     <div className="mt-2">
        <span className="text-[#8093AF] capitalize">balance:</span>
       <span className="text-white">9.23 ETH . Maximum</span>
     </div>
     {/* second input */}
     <InputSelect>
     <CurrencyInput value={state2} onChange={onChange2} />
     <CurrencySelect />
     </InputSelect>
     <div className="mt-2">
        <span className="text-[#8093AF] capitalize">balance:</span>
       <span className="text-white">4.21 BNB . Maximum</span>
     </div>
    </div>
  )
}

export default Deposite
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RiExchangeDollarFill } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa6";
import { BsCurrencyBitcoin } from "react-icons/bs";




export function CurrencySelect() {
  const [currency, setCurrency] = React.useState('');
  const handle = (value: any) => {
    setCurrency(value)
  }

  return (
    <Select value={currency} onValueChange={handle}>
      <SelectTrigger className="w-[140px] bg-transparent text-white" value={currency} >
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent className="bg-[#2f3f59] border-[#2f3f59] text-white ">
        <SelectGroup>

          <SelectItem value="usdc"  className="hover:!bg-white/10 hover:!text-white"><div className="flex items-center space-x-2 w-full "><span className="flex items-center justify-center w-6 h-6 bg-[#2775CA] rounded-full"><RiExchangeDollarFill size={18} color="white" /></span> <span className="uppercase text-xs font-medium">usdc</span></div></SelectItem>
          <SelectItem value="eth" className="hover:!bg-white/10 hover:!text-white"><div className="flex items-center space-x-2 "><span className="flex items-center justify-center w-6 h-6 bg-[#627EEA] rounded-full"><FaEthereum color="white" size={18} /></span> <span className="uppercase text-xs font-medium">eth</span></div></SelectItem>
          <SelectItem value="bitcoin" className="hover:!bg-white/10 hover:!text-white"><div className="flex items-center space-x-2 "><span className="flex items-center justify-center w-6 h-6 bg-[#F7931A] rounded-full"><BsCurrencyBitcoin className="rotate-12 block" color="white" size={18} /></span> <span className="uppercase text-xs font-medium">btc</span></div></SelectItem>
     
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

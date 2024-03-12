import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RiExchangeDollarFill } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";



export function CurrencySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[140px] bg-transparent text-white">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent className="bg-[#2f3f59] border-[#2f3f59] text-white ">
        <SelectGroup>

          <SelectItem value="apple" className="hover:!bg-white/10 hover:!text-white"><div className="flex items-center space-x-2 w-full "><RiExchangeDollarFill color="#2775CA" size={24} /> <span className="uppercase text-xs font-medium">usdc</span></div></SelectItem>
          <SelectItem value="applefs" className="hover:!bg-white/10 hover:!text-white"><div className="flex items-center space-x-2 "><FaEthereum color="#2775CA" size={24} /> <span className="uppercase text-xs font-medium">eth</span></div></SelectItem>
          <SelectItem value="applesd" className="hover:!bg-white/10 hover:!text-white"><div className="flex items-center space-x-2 "><FaBitcoin color="#2775CA" size={24} /> <span className="uppercase text-xs font-medium">btc</span></div></SelectItem>
     
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

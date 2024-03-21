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
import Image from "next/image"

export default function MaNFT() {
  return (
    <Select>
      <SelectTrigger className="w-full mt-4 !z-[99999999999999999999999999999] bg-[#2f3f59]">
        <SelectValue placeholder={<div className="flex items-center">
            <div className="flex items-center space-x-5">
                <Image src="/images/ellt.png" width={32} height={32} alt="ellt" />
                <span className="text-lg text-white">Exit Fee in %</span>
            </div>
        </div>} />
      </SelectTrigger>
      <SelectContent className="bg-[#2f3f59] border-[#2f3f59]">
        <SelectGroup>
    
          <SelectItem value="apple">jEUR: x.xxxx</SelectItem>
          <SelectItem value="banana">agEUR: x.xxxx</SelectItem>
          <SelectItem value="blueberry">Boosted: yes/no</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

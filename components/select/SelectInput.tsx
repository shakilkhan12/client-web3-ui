import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ReactNode, useState } from "react"
import SearchInput from "../input/SearchInput"
import DropDownSearch from "../input/DropDownSearch"
import TokenCheckboxes from "../checkboxes/TokenCheckboxes"
import { useDispatch } from "react-redux"
import { clearAll, filterTokens, selectAll } from "@/store/slices/globalSlice"
type PropTypes = {
    title: ReactNode
}
export function SelectInput({title}: PropTypes) {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const onChange = (e: any) => {
    setSearch(e.target.value)
    dispatch(filterTokens(e.target.value))
  }
 
  return (
    <Select>
      <SelectTrigger className=" bg-transparent border-none bg-[#2f3f59] outline-none ring-0">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent className="bg-[#2f3f59] border-[#2f3f59] text-white p-3">
        <SelectGroup>
          <div>
            <DropDownSearch value={search} onChange={onChange} />
            <div className="mt-3 flex justify-between gap-2 items-center border-b border-b-gray-600 pb-2">
              <span className="text-sm capitalize text-[#01DAD6] cursor-pointer" onClick={() => dispatch(clearAll())}>clear</span>
              <span className="text-sm capitalize text-[#01DAD6] cursor-pointer" onClick={() => dispatch(selectAll())}>select all</span>
            </div>
            <div>
              <TokenCheckboxes />
            </div>
          </div>
        
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

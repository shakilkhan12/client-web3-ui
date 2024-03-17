import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ReactNode, useState } from "react"
import DropDownSearch from "../input/DropDownSearch"
import TokenCheckboxes from "../checkboxes/TokenCheckboxes"
import { useDispatch } from "react-redux"
import { clearAll, filterTokens, poolcClearAll, poolsSelectAll, selectAll } from "@/store/slices/globalSlice"
import PoolCheckboxes from "../checkboxes/PoolCheckboxes"
type PropTypes = {
    title: ReactNode,
    type: string
}
export function SelectInput({title, type}: PropTypes) {
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
            {type === 'token' &&  <DropDownSearch value={search} onChange={onChange} />}
            {type === 'token' && <div className="mt-3 flex justify-between gap-2 items-center border-b border-b-gray-600 pb-2">
              <span className="text-sm capitalize text-[#01DAD6] cursor-pointer" onClick={() => dispatch(clearAll())}>clear</span>
              <span className="text-sm capitalize text-[#01DAD6] cursor-pointer" onClick={() => dispatch(selectAll())}>select all</span>
            </div>}
            {type === 'pool' && <div className="mt-3 flex justify-between gap-2 items-center border-b border-b-gray-600 pb-2">
              <span className="text-sm capitalize text-[#01DAD6] cursor-pointer" onClick={() => dispatch(poolcClearAll())}>clear</span>
              <span className="text-sm capitalize text-[#01DAD6] cursor-pointer" onClick={() => dispatch(poolsSelectAll())}>select all</span>
            </div>}
            
            <div>
              {type === 'token' && <TokenCheckboxes />}
              {type === 'pool' && <PoolCheckboxes />}
              
            </div>
          </div>
        
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

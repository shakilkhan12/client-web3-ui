import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ReactNode, useState } from "react"
import { FiMinus } from "react-icons/fi";
import DropDownSearch from "../input/DropDownSearch"
import TokenCheckboxes from "../checkboxes/TokenCheckboxes"
import { useDispatch } from "react-redux"
import { clearAll, filterTokens, poolcClearAll, poolsSelectAll, selectAll } from "@/store/slices/globalSlice"
import PoolCheckboxes from "../checkboxes/PoolCheckboxes"
import { GoPlus } from "react-icons/go";
type PropTypes = {
    title: ReactNode,
    type: string
}
export function SelectInput({title, type}: PropTypes) {
  const [search, setSearch] = useState('')
  const [min, setMin] = useState(100.00)
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
              {type === 'apr' && <div>
                  <span className="capitalize text-base font-medium text-white block">minimum</span>
                  <div className="mt-3 flex items-center space-x-3 px-4 bg-[#132542] rounded-[8px] h-[54px]">
                  <FiMinus className="cursor-pointer" color="white" size={22} onClick={() => setMin(min-1)} />
                  <span className="flex-1 text-white text-lg text-center px-2">{min}</span>
                  <GoPlus className="cursor-pointer" color="white" size={22} onClick={() => setMin(min+1)} />

                  </div>
                  <div className="mt-3">
                  <span className="capitalize text-base font-medium text-white block">maximum</span>
                  <div className="mt-3 flex items-center space-x-3 px-4 bg-[#132542] rounded-[8px] h-[54px]">
                  <FiMinus className="cursor-pointer" color="white" size={22}  />
                  <span className="flex-1 text-white text-lg text-center px-2">Maximum</span>
                  <GoPlus className="cursor-pointer" color="white" size={22} />

                  </div>
                  </div>
                  <button className="mt-4 btn-gradient block w-full rounded-[40px] h-[54px] text-lg font-medium capitalize px-4">apply</button>
                </div>}
              
            </div>
          </div>
        
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

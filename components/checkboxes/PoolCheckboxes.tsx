'use client'
import { Checkbox } from "@/components/ui/checkbox"
import {  pools, poolSelectOnChange } from "@/store/slices/globalSlice"
import { useDispatch, useSelector } from "react-redux"


const PoolCheckboxes = () => {
    const poolsData = useSelector(pools);
    const dispatch = useDispatch()
  return poolsData.map(item => (
    <div className="flex justify-between items-center space-y-3" key={item.id}>
       <span>{item.label}</span>
       <Checkbox checked={item.selected}  onCheckedChange={() => {
        dispatch(poolSelectOnChange(item));
       }} id="terms" />
    </div>
  ))
}

export default PoolCheckboxes
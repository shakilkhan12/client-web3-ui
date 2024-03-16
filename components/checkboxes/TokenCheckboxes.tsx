'use client'
import { Checkbox } from "@/components/ui/checkbox"
import { tokenSelectOnChange, tokens } from "@/store/slices/globalSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const TokenCheckboxes = () => {
    const tokenData = useSelector(tokens);
    const dispatch = useDispatch()
  return tokenData.map(item => (
    <div className="flex justify-between items-center space-y-3" key={item.id}>
       <span>{item.label}</span>
       <Checkbox checked={item.selected}  onCheckedChange={() => {
        dispatch(tokenSelectOnChange(item));
       }} id="terms" />
    </div>
  ))
}

export default TokenCheckboxes
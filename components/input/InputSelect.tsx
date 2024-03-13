'use client'

import { ReactNode } from "react"

type PropTypes = {
    children: ReactNode
}
const InputSelect = ({children}: PropTypes) => {
  return (
    <div className="mt-5 w-full h-[54px] rounded-[8px] bg-[#2f3f59] flex items-center justify-between space-x-4 px-4">
    {children}
   </div>
  )
}

export default InputSelect
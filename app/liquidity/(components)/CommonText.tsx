'use client'

import { FaRegEdit } from "react-icons/fa"
import { GoQuestion } from "react-icons/go"

const CommonText = () => {
  return (
    <>   <div className="flex items-center justify-between space-x-2">
    <span className="text-white text-lg">Minimium LP Tokens:</span>
    <div className="flex items-center space-x-2">
        <span className="text-white text-lg">45646</span>
        <GoQuestion color="#02ABEA" size={12} className="cursor-pointer" />
    </div>
</div>
<div className="flex items-center justify-between space-x-2 mt-4">
    <span className="text-white text-lg">Slippage:</span>
    <div className="flex items-center space-x-2">
        <span className="text-white text-lg">0.008%</span>
        <FaRegEdit color="#02ABEA" size={12} className="cursor-pointer" />
    </div>
</div></>
  )
}

export default CommonText
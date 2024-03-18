'use client'

import { useState } from "react"
import classNames from "classnames"
import Deposite from "./Deposite"

const LiquidityManagement = () => {
  const [tabs] = useState([
    {id: 1, title: 'deposit'},
    {id: 2, title: 'withdraw'},
    {id: 3, title: 'staking'},
    {id: 4, title: 'positions'},
  ])
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className='border rounded-full grid grid-cols-4 items-center gap-3 p-[3px] mt-3 overflow-x-auto'>
        {tabs.map(tab => (
          <button className={classNames('text-lg capitalize text-white flex-1 rounded-full px-3 h-[46px]', {
            'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2]': active === tab.id
          })} onClick={() => setActive(tab.id)}>{tab.title}</button>
        ))}
      
      </div>
      <div>
        {active === 1 ? <Deposite /> : ''}
      </div>
    </div>
  )
}

export default LiquidityManagement
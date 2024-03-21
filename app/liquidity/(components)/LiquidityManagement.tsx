'use client'

import { useState } from "react"
import classNames from "classnames"
import Deposite from "./Deposite"
import DepositeBottom from "./DepositeBottom"
import Withdraw from "./Withdraw"
import WithdrawBottom from "./WithdrawBottom"
import Stacking from "./Stacking"
import Positions from "./Positions"
type PropTypes = {
  state: string
}
const LiquidityManagement = ({state}: PropTypes) => {
  const [tabs] = useState([
    {id: 1, title: 'deposit'},
    {id: 2, title: 'withdraw'},
    {id: 3, title: 'staking'},
    {id: 4, title: 'positions'},
  ])
  const [secondTab, setSecondTab] = useState([
    {id: 1, title: 'stable'},
    {id: 2, title: 'volatile'}
  ])
  const [active, setActive] = useState(state === 'add' ? 1 : state === 'remove' ? 2 : 1);
  const [secondActive, setSecondActive] = useState(2);
  return (
    <div>
      <div className='border rounded-lg sm:rounded-full grid grid-cols-2 sm:grid-cols-4 items-center gap-3 p-[3px] mt-3 overflow-x-auto'>
        {tabs.map(tab => (
          <button className={classNames('text-lg capitalize text-white flex-1 rounded-full px-3 h-[46px]', {
            'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2]': active === tab.id
          })} onClick={() => setActive(tab.id)}>{tab.title}</button>
        ))}
      
      </div>
      <div>
        {active === 1 && <Deposite />}
        {active === 2 && <Withdraw />}
        {active === 3 && <Stacking />}
        {active === 4 && <Positions />}
      </div>
      {active === 1 && <div className='border rounded-full grid grid-cols-2 items-center gap-3 p-[3px] mt-3 overflow-x-auto'>
        {secondTab.map(tab => (
          <button className={classNames('text-lg capitalize text-white flex-1 rounded-lg sm:rounded-full px-3 h-[46px]', {
            'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2]': secondActive === tab.id
          })} onClick={() => setSecondActive(tab.id)}>{tab.title}</button>
        ))}
      
      </div>}
      {active === 2 && <div className='border rounded-full grid grid-cols-2 items-center gap-3 p-[3px] mt-3 overflow-x-auto'>
        {secondTab.map(tab => (
          <button className={classNames('text-lg capitalize text-white flex-1 rounded-lg sm:rounded-full px-3 h-[46px]', {
            'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2]': secondActive === tab.id
          })} onClick={() => setSecondActive(tab.id)}>{tab.title}</button>
        ))}
      
      </div>}
      <div>
        {active === 1 && <DepositeBottom />}
        {active === 2 && <WithdrawBottom />}
        
      </div>
    </div>
  )
}

export default LiquidityManagement
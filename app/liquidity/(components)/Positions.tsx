'use client'

import { useState } from "react"
import MaNFT from "./MaNFT"
import classNames from "classnames"
import Split from "./Split"

const Positions = () => {
  const [tabs] = useState([
    {id: 1, title: 'unstake'},
    {id: 2, title: 'merg'},
    {id: 3, title: 'split'}
  ])
const [active, setActive] = useState(1)
  return (
    <div>
        <MaNFT />
        <div className='border rounded-lg sm:rounded-full grid grid-cols-2 sm:grid-cols-3 items-center gap-3 p-[3px] mt-5 overflow-x-auto'>
    {tabs.map(tab => (
      <button className={classNames('text-lg capitalize text-white flex-1 rounded-full px-3 h-[46px]', {
        'bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2]': active === tab.id
      })} onClick={() => setActive(tab.id)}>{tab.title}</button>
    ))}
  
  </div>
  {active === 1 &&  <button className="h-[54px] rounded-[40px] bg-[#104064] px-4 tex-xl font-medium text-gray-500 block w-full mt-5 capitalize">unstake</button>}
  {active === 2 && <>
  <MaNFT />
  <button className="h-[54px] rounded-[40px] bg-[#104064] px-4 tex-xl font-medium text-gray-500 block w-full mt-5 capitalize">unstake</button>
  </>}
  {active === 3 && <Split />}
       
    </div>
  )
}

export default Positions
'use client'

import Image from "next/image"

const BalanceInput = () => {
  return (
  <>
    <div className='bg-[#2f3f59] h-[54px] rounded-[8px] mt-4 flex items-center px-3 space-x-2 md:space-x-5'>
            <div className="flex items-center">
                <Image alt="icon" src="/images/eth.png" width={24} height={24} />
                <Image alt="icon" src="/images/btc.png" width={24} height={24} className="-ml-1" />
            </div>
              <input type="number" className='bg-[#2f3f59] flex-1 text-[22px] outline-none w-full text-white placeholder:text-[16px] md:placeholder:text-[22px] placeholder:text-white' placeholder='0.00' />
              <button className="h-[42px] border rounded-[8px] px-4 capitalize text-white border-white">maximum</button>
            </div>
            <div className="mt-2">
            <span className="text-[#8093AF] capitalize">balance:</span>
           <span className="text-white">4.21 BNB . Maximum</span>
         </div>
  </>
  )
}

export default BalanceInput
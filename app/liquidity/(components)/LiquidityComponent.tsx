'use client'

import Button from "@/components/buttons/Button"
import OutlineButton from "@/components/buttons/OutlineButton"
import SearchInput from "@/components/input/SearchInput"
import { SelectInput } from "@/components/select/SelectInput"
import Link from "next/link"
import Table from "./Table"

const LiquidityComponent = () => {
  return (
    <div>
        <h1 className="text-white capitalize text-[40px] font-bold">Liquidity</h1>
        <p className="text-lg text-white mt-1">Pair your tokens to provide liquidity. Stake the LP tokens to earn BUG. <Link href="/" className="text-[#01DAD6] inline-block ml-1 capitalize">learn more</Link></p>
        <div className="bg-[#132542] rounded-[18px] p-6 mt-4">
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1 ">
                    <SearchInput />
                </div>
                <div className="w-full lg:w-5/12 gap-3 flex">
                <OutlineButton label="add" />
                <OutlineButton label="remove" />
                <Button label="claim all" />
                </div>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3">
               <SelectInput title={<div className="text-[#01DAD6]">Token: <span className="text-white">BTC + 3 more</span></div>} />
               <SelectInput title={<div className="text-[#01DAD6]">APR: <span className="text-white">100.000 - Max</span></div>} />
               <SelectInput title={<div className="text-[#01DAD6]">TVL: <span className="text-white">10 - Max</span></div>} />
               <SelectInput title={<div className="text-[#01DAD6]">Pool Attributes: <span className="text-white">volaite, stable</span></div>} />
            </div>
            <div className="mt-5">
              <Table />
            </div>
        </div>
    </div>
  )
}

export default LiquidityComponent
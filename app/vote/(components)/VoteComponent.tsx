'use client'

import Link from "next/link"
import Votes from "./Votes"
import SearchInput from "@/components/input/SearchInput"
import { useSelector } from "react-redux"
import { useState } from "react"
import { pools, tokens } from "@/store/slices/globalSlice"
import { SelectInput } from "@/components/select/SelectInput"
import Table from "./Table"
import VoteCard from "./VoteCard"

const VoteComponent = () => {
  const [search, setSearch] = useState('')
  const tokensData = useSelector(tokens)
  const poolsData = useSelector(pools)
  const onChange = (e: any) => {
    setSearch(e.target.value)
  }
  const selectedTokens = tokensData.filter(token => token.selected);
  const poolsSelectedTokens = poolsData.filter(token => token.selected);
  return (
    <div>
        <div className="flex items-center justify-between gap-3">
            <h1 className="text-white capitalize text-3xl md:text-[40px] font-bold">vote</h1>
            <Link href="/" className="text-[#01DAD6] inline-block ml-1 capitalize underline">learn more</Link>
        </div>
        <Votes />
        <div className="bg-[#132542] rounded-[18px] p-6 mt-4">
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1 ">
                    <SearchInput value={search} onChange={onChange} />
                </div>
                <div className="w-full lg:w-5/12 gap-3 flex flex-wrap">
                .......
                </div>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3">
               <SelectInput type="token" title={<div className="text-[#01DAD6]">Token: {selectedTokens.length === 0 ? <span className="text-white">....</span> : selectedTokens.length === 1 ? <span className="text-white">{selectedTokens[0].label}</span> : <span className="text-white">{selectedTokens[0].label} + {selectedTokens.length - 1}</span>}</div>} />
               <SelectInput type="" title={<div className="text-[#01DAD6]">APR: <span className="text-white">100.000 - Max</span></div>} />
               <SelectInput type="" title={<div className="text-[#01DAD6]">TVL: <span className="text-white">10 - Max</span></div>} />
               <SelectInput type="pool" title={<div className="text-[#01DAD6]">Pool Attributes: {poolsSelectedTokens.length === 0 ? <span className="text-white">....</span> : poolsSelectedTokens.length === 1 ? <span className="text-white">{poolsSelectedTokens[0].label}</span> : <span className="text-white">{poolsSelectedTokens[0].label} + {poolsSelectedTokens.length - 1}</span>}</div>} />
            </div>
            <div className="mt-5">
              <Table />
            </div>
            <VoteCard />
        </div>
    </div>
  )
}

export default VoteComponent
'use client'

import Button from "@/components/buttons/Button"
import OutlineButton from "@/components/buttons/OutlineButton"
import SearchInput from "@/components/input/SearchInput"
import { SelectInput } from "@/components/select/SelectInput"
import Link from "next/link"
import Table from "./Table"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pools, toggleModel, tokens } from "@/store/slices/globalSlice"
import Model from "@/components/models/Model"
import LiquidityManagement from "./LiquidityManagement"


const LiquidityComponent = () => {
  const [search, setSearch] = useState('')
  const tokensData = useSelector(tokens)
  const poolsData = useSelector(pools)
  const onChange = (e: any) => {
    setSearch(e.target.value)
  }
  const [buttonState, setButtonState] = useState('')
  const dispatch = useDispatch()
  const add = (value: string) => {
    setButtonState(value)
    dispatch(toggleModel())
  }
  const remove = (value: string) => {
    setButtonState(value)
    dispatch(toggleModel())
  }
  const selectedTokens = tokensData.filter(token => token.selected);
  const poolsSelectedTokens = poolsData.filter(token => token.selected);
  console.log(buttonState)
  return (
    <div>
     {buttonState && <Model label={buttonState === 'add' ? 'Manage: ETH/BTC' : ''}>
      {buttonState && buttonState === 'add' ? <LiquidityManagement /> : ''}
      </Model>}
        <h1 className="text-white capitalize text-3xl md:text-[40px] font-bold">Liquidity</h1>
        <p className="text-lg text-white mt-1">Pair your tokens to provide liquidity. Stake the LP tokens to earn BUG. <Link href="/" className="text-[#01DAD6] inline-block ml-1 capitalize underline">learn more</Link></p>
        <div className="bg-[#132542] rounded-[18px] p-6 mt-4">
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1 ">
                    <SearchInput value={search} onChange={onChange} />
                </div>
                <div className="w-full lg:w-5/12 gap-3 flex flex-wrap">
                <OutlineButton label="add" onClick={add} />
                <OutlineButton label="remove" onClick={remove} />
                <Button label="claim all" />
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
        </div>
    </div>
  )
}

export default LiquidityComponent
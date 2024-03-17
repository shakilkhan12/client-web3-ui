'use client'

import { votes } from "@/store/slices/globalSlice"
import { useSelector } from "react-redux"

const Votes = () => {
    const votesData = useSelector(votes);
  return (
    <div className="bg-[#132542] rounded-[18px] p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-7">
        {votesData.map(vote => (
            <div key={vote.id}>
                <span className="text-[#01DAD6] text-sm block">{vote.label}</span>
                <span className="text-white text-[22px] font-bold block mt-2">{vote.value}</span>
            </div>
        ))}
    </div>
  )
}

export default Votes
'use client'
const VoteCard = () => {
  return (
    <div className="fixed bottom-6 left-[50%] w-[350px] sm:w-[410px] rounded-[11px] bg-[#3b4a62] -translate-x-[50%] p-4">
        <div className="flex justify-between items-center space-x-2">
            <span className="text-white ">Voting power used: </span>
            <span className="text-[#01DAD6]">0.00%</span>
        </div>
        <div className="flex justify-between items-center space-x-2 mt-2">
            <span className="text-white ">Voted this poll: </span>
            <span className="text-white">No</span>
        </div>
        <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-full h-[40px] block w-full mt-3 text-white uppercase text-sm">cast votes</button>
    </div>
  )
}

export default VoteCard
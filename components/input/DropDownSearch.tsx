'use client'

import { CiSearch } from "react-icons/ci"
type PropTypes = {
  value: string;
  onChange: (e: any) => void;
}
const DropDownSearch = ({value, onChange}: PropTypes) => {
  return (
    <div className=' bg-[#132542] h-[45px] rounded-lg flex items-center px-3 space-x-2 md:space-x-3'>
            <CiSearch className='' color="white" size={25} />
              <input type="text" className='bg-[#132542] outline-none w-full text-white placeholder:text-[10px] md:placeholder:text-sm' placeholder='Search...' value={value} onChange={onChange} />
            </div>
  )
}

export default DropDownSearch
'use client'

import { CiSearch } from "react-icons/ci"
type PropTypes = {
  value: string;
  onChange: (e: any) => void;
}
const SearchInput = ({value, onChange}: PropTypes) => {
  return (
    <div className=' bg-[#2f3f59] h-[54px] rounded-full flex items-center px-5 space-x-2 md:space-x-5'>
            <CiSearch className='' color="white" size={25} />
              <input type="text" className='bg-[#2f3f59] outline-none w-full text-white placeholder:text-[10px] md:placeholder:text-sm' placeholder='Search' value={value} onChange={onChange} />
            </div>
  )
}

export default SearchInput
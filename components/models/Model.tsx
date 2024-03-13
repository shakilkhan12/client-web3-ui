import React, { ReactNode, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoCloseCircleOutline } from 'react-icons/io5'
type PropTypes = {
  label: string;
  children: ReactNode,
  modelState: boolean
  toggleModel: () => void
}
const Model = ({label, children, modelState, toggleModel}: PropTypes) => {

  return modelState ? (
    <div className='fixed inset-0 w-full h-full bg-black/30 backdrop-blur flex items-center justify-center p-6'>
        <div className='bg-[#132542] w-full lg:w-[636px] rounded-[16px] p-8'>
            <div className='flex items-center justify-between space-x-6'>
                <h1 className='text-[22px] lg:text-[26px] font-medium text-white'>{label}</h1>
                <IoCloseCircleOutline size={25} color="#d9d9d9" className='cursor-pointer' onClick={() => toggleModel(!modelState)} />

            </div>
           {children}
        </div>
    </div>
  ) : ''
}

export default Model
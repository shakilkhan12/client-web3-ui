import { modelState, toggleModel } from '@/store/slices/globalSlice';
import React, { ReactNode, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoClose, IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
type PropTypes = {
  label: string;
  children: ReactNode,
}
const Model = ({label, children}: PropTypes) => {
  const model = useSelector(modelState);
  const dispatch = useDispatch()
  return model ? (
    <div className='fixed inset-0 w-full h-full bg-black/30 backdrop-blur flex items-center justify-center px-2 py-4 lg:p-6 z-[999999999999999]'>
        <div className='bg-[#132542] w-full lg:w-[636px] rounded-[16px] p-4 lg:px-8 lg:pb-8 lg:pt-5 max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-[#132542]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#01DAD6] relative
  '>
            <div className='flex items-center justify-between space-x-6 sticky top-0 bg-[#132542] z-[999] pb-3'>
                <h1 className='text-[22px] lg:text-[26px] font-medium text-white'>{label}</h1>
                <span onClick={() => dispatch(toggleModel())} className='cursor-pointer flex w-[30px] h-[30px] items-center justify-center rounded-md border'><IoClose size={22} color="#d9d9d9"   /></span>

            </div>
            <div></div>
           {children}
        </div>
    </div>
  ) : ''
}

export default Model
'use client'
import { Switch } from '@/components/ui/switch'
import { GoQuestion } from 'react-icons/go'

const AddTokens = () => {
  return (
    <div className="flex items-center gap-3 justify-between">
            <div className="flex gap-2 items-center"><span className="text-white text-lg">Add tokens in equal proportion</span><GoQuestion color="#02ABEA" size={12} className="cursor-pointer" /></div>
            <Switch id="switch" className="!bg-[#2f3f59]" />
        </div>
  )
}

export default AddTokens
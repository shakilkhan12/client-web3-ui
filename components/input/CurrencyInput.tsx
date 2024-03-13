import React, { ChangeEvent } from 'react'
type PropTypes = {
    value: any,
    onChange: (e: any) => void
}
const CurrencyInput = ({value, onChange}: PropTypes) => {
  return (
    <input type="text" className="text-[22px] font-semibold text-white outline-none bg-transparent" placeholder="0.00" value={value} onChange={onChange} />
  )
}

export default CurrencyInput
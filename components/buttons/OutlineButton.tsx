'use client'

type PropTypes = {
    label: string;
    onClick: (value: string) => void;
}
const OutlineButton = ({label, onClick}: PropTypes) => {
  return (
    <button className="rounded-full border border-[#01ADED] px-8 h-[45px] md:h-[54px] text-white capitalize text-sm md:text-lg" onClick={() => onClick(label)}>{label}</button>
  )
}

export default OutlineButton
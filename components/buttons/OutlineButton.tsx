'use client'
type PropTypes = {
    label: string;
}
const OutlineButton = ({label}: PropTypes) => {
  return (
    <button className="rounded-full border border-[#01ADED] px-8 h-[45px] md:h-[54px] text-white capitalize text-sm md:text-lg">{label}</button>
  )
}

export default OutlineButton
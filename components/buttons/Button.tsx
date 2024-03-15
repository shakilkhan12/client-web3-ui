'use client'
type PropTypes = {
    label: string;
}
const Button = ({label}: PropTypes) => {
  return (
    <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-full h-[45px] md:h-[54px] px-8 capitalize text-sm md:text-lg text-white">{label}</button>
  )
}

export default Button
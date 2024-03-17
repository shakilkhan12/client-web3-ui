import type { Metadata } from "next";
import LiquidityComponent from "./(components)/LiquidityComponent"
export const metadata: Metadata = {
  title: "Liquidity",
  description: "Web 3 description",
};
const page = () => {
  return (
    <div className="w-full xl:w-[1065px]"><LiquidityComponent /></div>
  )
}

export default page
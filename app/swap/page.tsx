import type { Metadata } from "next";
import SwapComponent from "./(components)/SwapComponent";
export const metadata: Metadata = {
  title: "Swap",
  description: "Swap component description",
};
const page = () => {
  return (
    <SwapComponent />
  )
}

export default page




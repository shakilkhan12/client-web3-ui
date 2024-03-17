import { Metadata } from "next";
import VoteComponent from "./(components)/VoteComponent";

export const metadata: Metadata = {
    title: "Vote",
    description: "Web 3 description",
  };
const page = () => {
  return (
    <div className="w-full xl:w-[1065px]"><VoteComponent/></div>
  )
}

export default page
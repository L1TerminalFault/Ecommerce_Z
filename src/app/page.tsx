import { redirect } from "next/navigation";
export default function RootPage() {
  redirect("/home");
  // return (
  //   <div className="">
  //     <div className="text-3xl">Root Page</div>
  //   </div>
  // );
}

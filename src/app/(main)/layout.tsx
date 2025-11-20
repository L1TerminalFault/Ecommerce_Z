"use client";

import { usePathname } from "next/navigation";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import TitlePath from "@/components/TitlePath";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  return (
    <div className="flex bg-gray-900 justify-center h-screen max-w-screen">
      <TopBar />

      <div className="flex //max-w-[1500px] w-full flex-1 md:pt-[74px] md:pb-3 md:pr-3">
        <SideBar />

        <div className="flex flex-col bg-gray-950 w-[calc(100%-500px)] md:rounded-2xl flex-1">
          <TitlePath classname="max-md:hidden" />
          <div
            id="container"
            className="p-2 flex flex-col max-md:pb-20 rounded-2xl flex-1 h-[calc(100%-200px)] max-md:pt-14 w-full overflow-x-hidden overflow-y-scroll scrollbar-hidden"
          >
            <TitlePath classname="md:hidden" />
            {path.startsWith("/checkout") ? (
              <>
                <ClerkLoading>Loading cart...</ClerkLoading>
                <ClerkLoaded>{children}</ClerkLoaded>
              </>
            ) : path.startsWith("/orders") ? (
              <>
                <ClerkLoading>Loading orders...</ClerkLoading>
                <ClerkLoaded>{children}</ClerkLoaded>
              </>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

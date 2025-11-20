import {
  ClerkLoaded,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import shopLogo from "@/../public/shop.png";

const title = "Ecommerce";

export default function TopBar() {
  return (
    <div className="flex justify-center fixed top-0 w-full p-3 z-50">
      <div className="shadow-[#00000077] max-md:shadow-lg flex w-full justify-between align-middle rounded-full px-5 py-2 bg-gray-950 max-md:bg-white/5 max-md:backdrop-blur-2xl">
        <Link
          href="/home"
          className="flex items-center gap-3 px-2 transition-all rounded-full hover:bg-white/5"
        >
          <Image
            alt=""
            src={shopLogo}
            width={30}
            height={30}
            className="size-5"
          />

          <div className="text-xl font-bold">{title}</div>
        </Link>

        <ClerkLoaded>
          <SignedOut>
            <div className="flex gap-1">
              <SignInButton mode="modal">
                <div className="px-4 pt-1.5 pb-[3px] text-xs rounded-full hover:bg-white/5 transition-all">
                  Sign In
                </div>
              </SignInButton>

              <SignUpButton mode="modal">
                <div className="px-4 pt-1.5 pb-[3px] text-xs bg-gray-950 md:bg-white/5 md:hover:bg-white/10 rounded-full hover:bg-gray-950/40 transition-all">
                  Sign Up
                </div>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="text-white">
              <UserButton
                showName
                appearance={{
                  variables: {
                    colorText: "fff",
                  },
                  elements: {
                    userButtonBox: {
                      color: "ffffff",
                    },
                  },
                }}
              />
            </div>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}

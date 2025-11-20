"use client";

import { usePathname } from "next/navigation";

import SideBarButton from "./SideBarButton";
import homeButton from "@/../public/home.png";
import checkoutButton from "@/../public/checkout.png";
import productsButton from "@/../public/products.png";
import ordersButton from "@/../public/add.png";
import aboutButton from "@/../public/info.png";

export default function SideBar() {
  const pathName = usePathname();

  return (
    <div className="group pt-20 p-4 max-md:fixed max-md:bottom-0 max-md:w-full z-50">
      <div className="max-md:shadow-lg shadow-[#00000077] flex flex-col md:gap-3 transition-all gap-1 max-md:w-full max-md:justify-between max-md:flex-row max-md:p-1.5 max-md:backdrop-blur-2xl max-md:bg-white/5 max-md:rounded-full">
        <SideBarButton
          icon={homeButton}
          title="Home"
          selected={pathName.includes("home")}
          path="/home"
        />
        <SideBarButton
          icon={productsButton}
          title="Products"
          selected={
            pathName.includes("products") || pathName.includes("addProduct")
          }
          path="/products"
        />
        <SideBarButton
          icon={checkoutButton}
          title="Checkout"
          selected={pathName.includes("checkout")}
          path="/checkout"
        />
        <SideBarButton
          icon={ordersButton}
          title="Orders"
          selected={pathName.includes("orders")}
          path="/orders"
        />
        <SideBarButton
          icon={aboutButton}
          title="About"
          selected={pathName.includes("about")}
          path="/about"
        />
      </div>
    </div>
  );
}

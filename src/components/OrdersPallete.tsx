"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Notify from "./Notify";

export default function OrdersAdminPallete({
  _id,
  productName,
  productPrice,
  productImage,
  userData,
  timeOfOrder,
  status: statusProp,
  isAdmin,
}: {
  _id: string;
  productName: string;
  productPrice: number;
  productImage: StaticImageData;
  userData?: {
    name: string;
    profile: string;
  };
  timeOfOrder: string;
  status: string;
  isAdmin: boolean;
}) {
  const [delivering, setDelivering] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState(statusProp);
  const [notify, setNotify] = useState(false);

  const updateOrder = async (action: "cancel" | "deliver") => {
    if (action === "deliver") setDelivering(true);
    else setCancelling(true);
    try {
      const res = await (
        await fetch("/api/orders/updateOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id,
            action,
          }),
        })
      ).json();
      if (res.message !== "success")
        throw Error("Server returned unsuccessfully");
      setStatus(action === "deliver" ? "Delivered" : "Cancelled");
    } catch (err) {
      console.error("Couldn't perform update order action", err);
      setError("Couldn't perform action");
      setNotify(true);
      setTimeout(() => setNotify(false), 2);
    } finally {
      setDelivering(false);
      setCancelling(false);
    }
  };

  return (
    <div
      className={`${status === "Pending" ? "bg-white/5 border-t border-gray-800" : "bg-[#ffffff07]"} p-2 flex flex-col gap-2 rounded-3xl justify-center`}
    >
      {notify ? <Notify message={error} /> : null}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div
            className={`${status === "Pending" && isAdmin ? "h-32 w-24" : "h-24 w-20"} bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center`}
          >
            <Image
              alt=""
              width={60}
              height={60}
              src={productImage}
              className="w-full"
            />
          </div>
          <div className="flex flex-col">
            <div>{productName}</div>
            <div className="text-sm text-gray-300">${productPrice}</div>
          </div>
        </div>

        {isAdmin ? (
          <div className="flex flex-col">
            <div className="p-2 flex flex-1 gap-3 items-center justify-end">
              <div className="flex flex-col gap-0.5 items-end">
                <div className="text-sm text-gray-400">
                  {userData?.name || "No Name"}
                </div>
                <div className="text-xs text-gray-500 text-right">
                  {timeOfOrder}
                </div>
              </div>
              <div className="overflow-hidden rounded-full mr-1">
                <Image
                  alt=""
                  width={50}
                  height={50}
                  src={userData?.profile || ""}
                  className="size-9"
                />
              </div>
            </div>
            <div className="flex flex-col">
              {status === "Pending" ? (
                <>
                  <div className="text-sm pt-3.5 px-4 text-right text-gray-400">
                    Pending
                  </div>
                  <div className="flex gap-2 p-2 items-end">
                    <div
                      onClick={() => {
                        if (!delivering && !cancelling) updateOrder("deliver");
                      }}
                      className={`px-4 py-1 text-xs transition-all rounded-full ${cancelling ? "bg-[#ffffff04] cursor-not-allowed text-gray-500" : "bg-white/5 hover:bg-white/10"}`}
                    >
                      {delivering ? "Please wait..." : "Mark Delivered"}
                    </div>
                    <div
                      onClick={() => {
                        if (!delivering && !cancelling) updateOrder("cancel");
                      }}
                      className={`px-4 py-1 text-xs transition-all rounded-full ${delivering ? "bg-[#ffffff04] cursor-not-allowed text-gray-500" : "text-red-600 bg-white/5 hover:bg-white/10"} `}
                    >
                      {cancelling ? "Cancelling" : "Cancel"}
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className={`px-4 py-1 pt-3.5 text-right text-sm ${status === "Delivered" ? "text-green-600" : "text-red-600"}`}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div
              className={`${status === "Pending" ? "text-gray-400" : status === "Delivered" ? "text-green-600" : "text-red-600"} pr-4`}
            >
              {status === "Delivered" ? "Arrived" : status}
            </div>
            <div className="text-xs text-gray-500 text-right pr-4">
              {timeOfOrder}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Orders",
    template: "",
  },
};

export default function OrdersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Checkout",
    template: "",
  },
};

export default function CheckoutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Product Details",
    template: "",
  },
};

export default async function ProductDetailsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

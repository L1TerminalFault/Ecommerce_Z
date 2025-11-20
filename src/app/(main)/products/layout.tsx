import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: "Products",
    template: "",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

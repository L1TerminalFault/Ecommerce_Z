import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "",
  },
};

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

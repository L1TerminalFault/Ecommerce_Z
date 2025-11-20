import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

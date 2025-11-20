import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Add Product",
    template: "",
  },
};

export default function AddProductLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

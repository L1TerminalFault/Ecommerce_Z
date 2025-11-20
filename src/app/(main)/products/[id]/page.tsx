"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import a from "@/../public/IMG_20251112_155954_347.jpg";
import { useProductStore } from "@/lib/store";

type Product = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export default function ProductDetails(
  {
    // params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  const router = useRouter();
  const { currentProduct, setCart, cart } = useProductStore();
  // const [id, setId] = useState("");
  const [existsInCart, setExistsInCart] = useState(false);

  useEffect(() => {
    (() => {
      if (cart.find((cartItem: Product) => cartItem._id === currentProduct._id))
        setExistsInCart(true);
    })();
  }, [currentProduct, cart]);

  if (currentProduct._id === "") return router.push("/products");

  const handleClick = () => {
    if (cart.find((cartItem: Product) => cartItem._id === currentProduct._id)) {
      const newCart: Product[] = [];
      cart.forEach((cartItem: Product) => {
        if (cartItem._id !== currentProduct._id) newCart.push(cartItem);
      });
      setCart(newCart);
      setExistsInCart(false);
    } else {
      const newCart = cart;
      newCart.push(currentProduct);
      setCart(newCart);
      setExistsInCart(true);
    }
  };

  return (
    <div className="slide-to-left p-3">
      <div className="relative bg-white/5 p-2 flex  rounded-3xl">
        <div className="p-4 w-1/2 flex items-center justify-center">
          <div className="flex flex-col">
            <div className="text-2xl">${currentProduct.price}</div>
            <div className="text-gray-300 text-lg">{currentProduct.title}</div>
            <div className="text-sm text-gray-400">
              {currentProduct.description}
            </div>
            <div
              onClick={handleClick}
              className="px-5 mt-3 py-1 text-nowrap w-min transition-all bg-white/5 hover:bg-white/10 rounded-full"
            >
              {existsInCart ? "Remove from cart" : "Add to cart"}
            </div>
          </div>
        </div>
        <Image
          alt=""
          width={1000}
          height={1000}
          src={a}
          className="w-1/2 rounded-2xl"
        />
      </div>
    </div>
  );
}

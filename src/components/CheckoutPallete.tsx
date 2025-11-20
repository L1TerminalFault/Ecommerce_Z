"use client";

import Image, { StaticImageData } from "next/image";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export default function CheckoutPallete({
  id,
  title,
  price,
  description,
  image,
  setCart,
  cart,
}: {
  id: string;
  title: string;
  price: number;
  description: string;
  image: StaticImageData;
  cart: Product[];
  setCart: (value: Product[]) => void;
}) {
  const removeFromCart = () => {
    const newCart: Product[] = [];
    cart.forEach((cartItem) => {
      if (cartItem._id !== id) newCart.push(cartItem);
    });
    setCart(newCart);
  };
  return (
    <div className="relative bg-white/5 p-2 flex justify-between rounded-3xl">
      <div className="w-1/2 flex flex-col justify-between">
        <div className="flex gap-3">
          <div className="h-28 w-24 rounded-2xl bg-white/5 overflow-hidden flex items-center justify-center">
            <Image
              alt=""
              width={100}
              height={100}
              src={image}
              className="w-full"
            />
          </div>
          <div className="py-3 flex flex-col gap-0.5">
            <div className="">${price}</div>
            <div className="text-sm">{title}</div>
            <div className="text-xs text-gray-400">{description}</div>
          </div>
        </div>
      </div>

      <div className="h-28 flex items-end p-3">
        <div
          onClick={removeFromCart}
          className="rounded-full bg-white/5 hover:bg-white/10 px-5 py-1 mt-3 transition-all text-nowrap text-sm w-min"
        >
          Remove from cart
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import CheckoutPallete from "@/components/CheckoutPallete";
import { useProductStore } from "@/lib/store";
// import Notify from "@/components/Notify";
import a from "@/../public/IMG_20251112_155853_495.jpg";

type Product = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export default function Checkout() {
  const { setCart, cart } = useProductStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notify, setNotify] = useState<boolean>(false);
  const { user, isSignedIn } = useUser();

  const handlePlaceOrder = async () => {
    if (!isSignedIn) throw Error("Sign in first");

    setLoading(true);
    try {
      await fetch("/api/orders/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          cart.map((product: Product) => ({
            product,
            userId: user?.id,
          })),
        ),
      });
      setCart([]);
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 2000);
    } catch (err) {
      console.error("Error: ", err);
      setError(`Failed to add order: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="slide-to-left flex-1 relative p-2 flex flex-col gap-3">
      {/*notify ? (
        <Notify message={error || "Orders placed successfully"} />
      ) : null*/}
      {cart.length > 0 ? (
        <>
          {cart.map(
            ({
              _id,
              title,
              price,
              description,
            }: {
              _id: string;
              title: string;
              price: number;
              image: string;
              description: string;
              category: string;
            }) => (
              <CheckoutPallete
                key={_id}
                id={_id}
                title={title}
                price={price}
                description={description}
                image={a}
                cart={cart}
                setCart={setCart}
              />
            ),
          )}
          <div className="w-full flex justify-end p-4">
            <div
              onClick={handlePlaceOrder}
              className="rounded-full bg-white/10 hover:bg-white/15 transition-all px-5 py-2"
            >
              {loading
                ? "Please wait..."
                : cart.length == 1
                  ? "Place Order"
                  : "Place Orders"}
            </div>
          </div>
        </>
      ) : (
        <div>
          {error
            ? error
            : notify
              ? "Orders placed successfully"
              : "No items in cart"}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useUser, ClerkLoaded } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

import OrdersPallete from "@/components/OrdersPallete";
import f from "@/../public/IMG_20251112_155853_682.jpg";

type Product = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

type Order = {
  _id: string;
  product: Product;
  userId: string;
  status: string;
};

export default function Orders() {
  const { user, isSignedIn } = useUser();
  const isAdmin = user?.publicMetadata.isAdmin;
  // const isAdmin = false;
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUsers = async () => {
    if (!isAdmin) return;

    try {
      const res = await (await fetch("/api/users/getUsers")).json();
      setUsers(res.users);
    } catch (err) {
      console.error("Error fetching users: ", err);
      setError("Couldn't load users");
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      // if (!isSignedIn) throw Error("No User");

      const id = isAdmin ? "__ADMIN__" : user?.id;
      const res = await (
        await fetch("/api/orders/getOrders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        })
      ).json();
      // if (res.status === "success")
      setOrders(res.orders);
      // else throw Error();
    } catch (err) {
      console.error("Error loading order: ", err);
      const errTxt =
        err == "No User" ? "Sign in first" : "Couldn't load orders";
      setError(errTxt);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await fetchUsers();
        await fetchOrders();
      } catch (err) {
        console.error("Error fetch failed: ", err);
      }
    })();
  }, []);

  return loading ? (
    <div className="">Loading orders...</div>
  ) : error ? (
    <div className="">{error}</div>
  ) : orders?.length === 0 ? (
    <div className="">No orders found</div>
  ) : (
    <div className="slide-to-left p-2 flex flex-col gap-3">
      {orders
        ?.sort((a) => (a.status === "Pending" ? -1 : 1))
        .map((order: Order) => {
          const userData = users?.find((user) => user.id === order.userId);

          return isAdmin ? (
            <OrdersPallete
              key={order._id}
              _id={order._id}
              userData={{
                name: userData?.firstName || "" + userData?.lastName || "",
                profile: userData?.imageUrl || "",
              }}
              isAdmin
              productImage={f}
              timeOfOrder="Oct 12"
              productName={order.product.title}
              productPrice={order.product.price}
              status={order.status}
            />
          ) : (
            <OrdersPallete
              key={order._id}
              _id={order._id}
              productImage={f}
              isAdmin={false}
              timeOfOrder="Oct 12"
              productName={order.product.title}
              productPrice={order.product.price}
              status={order.status}
            />
          );
        })}
    </div>
  );
}

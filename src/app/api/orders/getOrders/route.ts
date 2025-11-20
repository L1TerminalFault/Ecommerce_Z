import { Order } from "@/lib/db";

// import { orders } from "@/lib/tests";

export async function POST(request: Request) {
  const { id: userId }: { id: string } = await request.json();
  console.log("user ", userId);
  let orders;
  if (userId === "__ADMIN__") orders = await Order.find();
  else orders = await Order.find({ userId });

  // const order =
  //   userId === "__ADMIN__"
  //     ? orders
  //     : orders.filter((order) => order.userId === userId);
  console.log("orders are ", orders);
  return Response.json({ status: "success", orders });
}

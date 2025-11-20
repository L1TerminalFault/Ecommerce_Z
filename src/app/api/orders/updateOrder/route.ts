import { Order } from "@/lib/db";

export async function POST(request: Request) {
  const {
    _id,
    action,
  }: {
    _id: string;
    action: string;
  } = await request.json();

  await Order.updateOne(
    { _id },
    { status: action === "deliver" ? "Delivered" : "Cancelled" },
  );
  return Response.json({ message: "success" });
}

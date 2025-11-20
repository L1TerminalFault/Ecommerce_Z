import { Order } from "@/lib/db";

export async function POST(request: Request) {
  const data: {
    product: {
      _id: string;
      title: string;
      price: number;
      image: string;
      description: string;
      category: string;
    };
    userId: string;
  }[] = await request.json();
  await Order.create(data);
  console.log(data);
  return Response.json({ message: "Order added successfully" });
}

import { Product } from "@/lib/db";

export async function POST(request: Request) {
  const data: {
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
  } = await request.json();

  await Product.create({
    title: data.title,
    price: data.price,
    image: data.image,
    description: data.description,
    category: data.category,
  });
  return Response.json({ message: "Product added successfully" });
}

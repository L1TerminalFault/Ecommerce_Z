import { Product } from "@/lib/db";

// import { products } from "@/lib/tests";

export async function GET() {
  const products = await Product.find();
  console.log(products);
  await new Promise((resolve) => setTimeout(resolve, 5));
  return Response.json(products);
}

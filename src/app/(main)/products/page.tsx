"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductPallete from "@/components/ProductPallete";

import { useProductStore } from "@/lib/store";
import a from "@/../public/IMG_20251112_155844_707.jpg";

type Product = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export default function Products() {
  const sectionToScrollTo = useSearchParams().get("section");
  const { setCurrentProduct } = useProductStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await (await fetch("/api/products/getProducts")).json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching products");
    }
    setLoading(false);
  };

  const handleClick = ({
    _id,
    title,
    price,
    image,
    description,
    category,
  }: Product) => {
    setCurrentProduct({ _id, title, price, image, description, category });
    router.push(`/products/${_id}`);
  };

  useEffect(() => {
    (async () => {
      await fetchProducts();

      const container = document.getElementById("container");
      const booksSection = document.getElementById("books");
      const servicesSection = document.getElementById("services");

      if (sectionToScrollTo === "books")
        container?.scroll({
          behavior: "smooth",
          top: (booksSection?.getClientRects().item(0)?.y || 0) - 100,
        });
      else if (sectionToScrollTo === "services")
        container?.scroll({
          behavior: "smooth",
          top: (servicesSection?.getClientRects().item(0)?.y || 0) - 100,
        });
    })();
  }, [sectionToScrollTo]);

  return loading ? <div>Loading products...</div> : error ? <div>{error}</div> : 
        <div className="slide-to-left">
          <div className="flex flex-col p-3 gap-3">
            <div className="text-lg text-gray-300">Clothes</div>

            <div className="flex flex-wrap scrollbar-hidden gap-4 overflow-scroll">
              {products
                .filter((product) => product.category === "Clothes")
                .map((product) => (
                  <div
                    onClick={() => {
                      handleClick(product);
                    }}
                    key={product._id}
                  >
                    <ProductPallete
                      image={a}
                      name={product.title}
                      price={product.price}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div id="books" className="flex flex-col p-3 gap-3">
            <div className="text-lg text-gray-300">Books</div>

            <div className="flex flex-wrap scrollbar-hidden gap-4 overflow-scroll">
              {products
                .filter((product) => product.category === "Books")
                .map((product) => (
                  <div onClick={() => handleClick(product)} key={product._id}>
                    <ProductPallete
                      image={a}
                      name={product.title}
                      price={product.price}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div id="services" className="flex flex-col p-3 gap-3">
            <div className="text-lg text-gray-300">Services</div>

            <div className="flex flex-wrap scrollbar-hidden gap-4 overflow-scroll">
              {products
                .filter((product) => product.category === "Services")
                .map((product) => (
                  <div onClick={() => handleClick(product)} key={product._id}>
                    <ProductPallete
                      image={a}
                      name={product.title}
                      price={product.price}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
}

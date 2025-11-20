"use client";

import { useEffect, useState } from "react";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const handleAddProduct = async () => {
    setLoading(true);
    try {
      await fetch("/api/products/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description,
          category: category,
        }),
      });
    } catch (err) {
      setError(`Failed to add order: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="slide-to-left">
      <form action={handleAddProduct}>
        <div>
          <input
            type="text"
            placeholder="Enter title of product"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns, Product } from "./columns";

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setData(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

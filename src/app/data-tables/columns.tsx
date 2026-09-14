"use client";

import { ColumnDef } from "@tanstack/react-table";
import { type DataTableFeatures } from "./data-table-features";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const columns: ColumnDef<DataTableFeatures, Product>[] = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "title",
    header: "Product",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="flex items-center gap-3">
          <img
            src={product.image}
            alt={product.title}
            className="h-10 w-10 object-contain rounded-md border p-1"
          />
          <span className="font-medium">{product.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return <span className="capitalize">{category}</span>;
    },
  },
  {
    accessorKey: "rating.rate",
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.original.rating?.rate;
      return (
        <div className="flex items-center gap-1 font-medium">
          <span className="text-yellow-500">★</span>
          <span>{rating ?? "N/A"}</span>
        </div>
      );
    },
  },
];

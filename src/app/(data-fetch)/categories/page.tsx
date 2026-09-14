import CategoryListCommponent from "@/components/category/CategoryListCommponent";
import React from "react";

export default function Categorypage() {
  const category = fetch("https://api.escuelajs.co/api/v1/categories")
    .then((data) => data.json())
    .then((category) => {
      console.log(category);
      return category;
    });
  return (
    <div>
      <CategoryListCommponent category={category} />
    </div>
  );
}

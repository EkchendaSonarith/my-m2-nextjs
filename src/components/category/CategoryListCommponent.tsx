"use client";
import React, { use } from "react";
import CategoryComponent, { CategoryInter } from "./CategoryComponent";

export default function CategoryListCommponent({
  category,
}: {
  category: Promise<CategoryInter[]>;
}) {
  const categories = use(category);
  return (
    <div>
      {categories.map(({ name, image, id }: CategoryInter) => (
        <CategoryComponent key={id} name={name} image={image} id={id} />
      ))}
    </div>
  );
}

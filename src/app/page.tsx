async function getProducts() {
  const res = await fetch(
    "https://sombobaeb.cheat.casa/food-items?skip=0&limit=100",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  return <div></div>;
}

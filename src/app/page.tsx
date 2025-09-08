import Image from "next/image";
import Link from "next/link";
import LocationSelector from "./components/LocationSelector";
import styles from "./page.module.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// ssr - server side rendering
async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <h1>Products</h1>

      <LocationSelector />

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ height: 8 }} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link
              style={{ textDecoration: "underline", color: "blue" }}
              href={`/product/${product.id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

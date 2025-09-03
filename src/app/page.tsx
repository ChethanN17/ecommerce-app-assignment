import Link from "next/link";
import { products } from "./data/products";
import styles from "./page.module.css";
import LocationSelector from "./components/LocationSelector";

export default function Home() {
  return (
    <main>
      <h1>Products</h1>

      {/* Location Selector */}
      <LocationSelector />

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link href={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

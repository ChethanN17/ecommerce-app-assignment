import Link from "next/link";
import { products } from "./data/products";
import styles from "./page.module.css";
import LocationSelector from "./components/LocationSelector";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Products</h1>

      {/* Location Selector */}
      <LocationSelector />

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src={product.image} alt={product.name} fill={true} style={{objectFit: 'contain'}} />
            </div>
            <div style={{height: 8}} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link href={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

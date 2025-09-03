"use client";

import { useStore } from "@/app/context/StoreContext";
import { products } from "@/app/data/products";
import styles from "./ProductDetails.module.css";

export default function ProductDetails({ id }: { id: string }) {
  const product = products.find((p) => p.id === +id);
  const { addToCart, addToWishlist } = useStore();

  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <div className={styles.actions}>
        <button
          className={styles.button}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className={styles.button}
          onClick={() => addToWishlist(product)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

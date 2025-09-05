"use client";

import { useStore } from "@/app/context/StoreContext";
import { Product } from "@/app/data/products";
import Image from "next/image";
import styles from "./ProductDetails.module.css";

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart, addToWishlist,loading } = useStore();


  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={product.image} alt={product.name} fill={true} style={{objectFit:'contain'}} />
      </div>
      <div style={{height: 16}}/>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <div className={styles.actions}>
        <button
          disabled={loading}
          className={styles.button}
          onClick={() => addToCart(product)}
        >
        Add to Cart
        </button>
        <button
          disabled={loading}
          className={styles.button}
          onClick={() => addToWishlist(product)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

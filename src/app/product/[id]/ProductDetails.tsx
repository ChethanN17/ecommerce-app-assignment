"use client";

import { useStore } from "@/app/context/StoreContext";
import type { Product } from "@/app/data/products";

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart, addToWishlist } = useStore();

  return (
    <div>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>Price: ₹{product.price}</p>
      <button style={{ marginRight: "1rem" }} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
}

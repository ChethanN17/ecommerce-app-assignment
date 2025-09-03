"use client";

import { useStore } from "@/app/context/StoreContext";
import styles from "./WishlistDetails.module.css";

export default function WishlistDetails() {
  const { wishlist, removeFromWishlist } = useStore();

  return (
    <div className={styles.container}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul className={styles.list}>
          {wishlist.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.name} - ₹{item.price}
              <button
                className={styles.removeButton}
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

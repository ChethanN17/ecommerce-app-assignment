"use client";

import { useStore } from "@/app/context/StoreContext";
import styles from "./CartDetails.module.css";

export default function CartDetails() {
  const { cart, removeFromCart } = useStore();

  return (
    <div className={styles.container}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className={styles.list}>
          {cart.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.name} - ₹{item.price}
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
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

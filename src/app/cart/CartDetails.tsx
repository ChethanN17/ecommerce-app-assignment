"use client";

import { useStore } from "@/app/context/StoreContext";

export default function CartDetails() {
  const { cart, removeFromCart } = useStore();

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
              <button
                style={{ marginLeft: "1rem" }}
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

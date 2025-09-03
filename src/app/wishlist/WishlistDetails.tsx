"use client";

import { useStore } from "@/app/context/StoreContext";

export default function WishlistDetails() {
  const { wishlist, removeFromWishlist } = useStore();

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
              <button
                style={{ marginLeft: "1rem" }}
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

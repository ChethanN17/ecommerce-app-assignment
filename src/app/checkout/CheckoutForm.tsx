"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocation } from "../context/LocationContext";
import { useStore } from "../context/StoreContext";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  const { data: session } = useSession();
  const { cart, clearCart, clearWishlist } = useStore();
  const { location } = useLocation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  if (!cart.length) {
    return <p>Your cart is empty. Add items before checkout.</p>;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const guestName = formData.get("name") as string | null;
    const guestEmail = formData.get("email") as string | null;

    const orderData = {
      user: session
        ? { email: session.user?.email }
        : { name: guestName, email: guestEmail },
      location,
      cart,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("lastOrder", JSON.stringify(orderData));

        clearCart();
        clearWishlist();

        router.push("/thank-you");
      } else {
        setMessage("❌ Failed to place order");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to place order");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <strong>Delivery Location:</strong> {location ?? "Not set"}
      </p>

      <h3>Items:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} – ₹{item.price}
          </li>
        ))}
      </ul>

      <hr />

      {session ? (
        <>
          <h3>Logged in as {session.user?.email}</h3>
        </>
      ) : (
        <>
          <h3>Guest Checkout</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            required
          />
        </>
      )}

      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

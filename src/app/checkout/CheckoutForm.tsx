"use client";

import { useStore } from "@/app/context/StoreContext";
import { useLocation } from "@/app/context/LocationContext";
import { useEffect, useState } from "react";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  const { cart } = useStore();
  const { location } = useLocation();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Order placed successfully!\nName: ${formData.name}\nLocation: ${location || "Not set"}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Guest Checkout</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <input
        type="text"
        name="address"
        placeholder="Delivery Address"
        value={formData.address}
        onChange={handleChange}
        required
        className={styles.input}
      />

      <button type="submit" className={styles.button}>
        Place Order
      </button>
    </form>
  );
}

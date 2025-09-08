"use client";

import { useEffect, useState } from "react";
import styles from "./Thankyou.module.css";
import Link from "next/link";

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  user?: {
    name?: string;
    email?: string;
  };
  location?: string;
  cart: CartItem[];
}

export default function ThankYouPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder) as Order);
    }
  }, []);

  if (!order) {
    return <p>No recent order found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Thank You for Your Order!</h1>
      <p className={styles.message}>We’ll deliver to: <b>{order.location || "Not set"}</b></p>

      <h2 className={styles.subtitle}>Order Summary</h2>
      <ul className={styles.list}>
        {order.cart.map((item: CartItem, idx: number) => (
          <li key={idx} className={styles.listItem}>
            {item.name} - {item.price} * {item.quantity || 1}
          </li>
        ))}
      </ul>

     <p className={styles.total}>
        Total: <b>${order.cart.reduce((sum: number, i: CartItem) => sum + Number(i.price) * (i.quantity || 1), 0)}</b>
      </p>


      <Link href="/" className={styles.button}>Back to Home</Link>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

type Order = {
  user: { name?: string; email?: string } | null;
  location: string | null;
  cart: { id: number; name: string; price: number }[];
};

export default function ThankYouPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
      localStorage.removeItem("lastOrder"); // ✅ clear after showing
    }
  }, []);

  if (!order) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>🎉 Thank You for Your Order!</h1>
        <p>No order details found.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>🎉 Thank You for Your Order!</h1>
      <p>We’ll send updates once your items are shipped 🚚</p>

      <h2>Order Summary</h2>
      <p>
        <strong>Delivery Location:</strong> {order.location ?? "Not set"}
      </p>
      <p>
        <strong>Customer:</strong>{" "}
        {order.user?.name ?? "Guest"} ({order.user?.email})
      </p>

      <h3>Items:</h3>
      <ul>
        {order.cart.map((item) => (
          <li key={item.id}>
            {item.name} – ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

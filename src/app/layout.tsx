import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "A simple e-commerce app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#0070f3", color: "white", padding: "1rem" }}>
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>ShopEasy</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/">Home</a>
              <a href="/cart">Cart</a>
              <a href="/wishlist">Wishlist</a>
              <a href="/checkout">Checkout</a>
            </div>
          </nav>
        </header>

        <main style={{ padding: "1rem" }}>{children}</main>

        <footer style={{ background: "#333", color: "white", textAlign: "center", padding: "1rem" }}>
          © {new Date().getFullYear()} ShopEasy
        </footer>
      </body>
    </html>
  );
}

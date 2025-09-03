import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./context/StoreContext";
import styles from "./layout.module.css";

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
        <StoreProvider>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <h1>ShopEasy</h1>
              <div className={styles.navLinks}>
                <a href="/">Home</a>
                <a href="/cart">Cart</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/checkout">Checkout</a>
              </div>
            </nav>
          </header>

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>
            © {new Date().getFullYear()} ShopEasy
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}

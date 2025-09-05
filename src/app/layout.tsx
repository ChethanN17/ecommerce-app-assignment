import type { Metadata } from "next";
import { AuthButtons } from "./components/AuthButtons";
import "./globals.css";
import styles from "./layout.module.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "A simple e-commerce app built with Next.js",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <h1>ShopEasy</h1>
              <div className={styles.navLinks}>
                <a href="/">Home</a>
                <a href="/cart">Cart</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/checkout">Checkout</a>
                <AuthButtons/>
              </div>
            </nav>
          </header>

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>
            © {new Date().getFullYear()} ShopEasy
          </footer>
        </Providers>
      </body>
    </html>
  );
}

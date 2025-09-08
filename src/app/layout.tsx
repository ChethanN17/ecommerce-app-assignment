import type { Metadata } from "next";
import { AuthButtons } from "./components/AuthButtons";
import "./globals.css";
import styles from "./layout.module.css";
import { Providers } from "./providers";
import Link from "next/link";

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
                <Link href="/">Home</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/wishlist">Wishlist</Link>
                <Link href="/checkout">Checkout</Link>
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

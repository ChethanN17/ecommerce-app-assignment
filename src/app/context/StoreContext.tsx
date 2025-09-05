"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type StoreContextType = {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  loading: boolean;
  addToWishlist: (product: Product) => void;
  removeFromCart: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  clearCart: () => void;
  clearWishlist: () => void; 
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // --- persistence for cart
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- persistence for wishlist
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product) => {
    setLoading(true);
    setCart((prev) => [...prev, product]);
    setTimeout(() => { setLoading(false); }, 500);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const clearWishlist = () => {
  setWishlist([]);
  localStorage.removeItem("wishlist");
};

  const addToWishlist = (product: Product) => {
    setLoading(true);
    setWishlist((prev) => [...prev, product]);
    setTimeout(() => { setLoading(false); }, 500);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart, 
        clearWishlist,
        loading
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}

"use client";

import { SessionProvider } from "next-auth/react";
import { StoreProvider } from "./context/StoreContext";
import { LocationProvider } from "./context/LocationContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <StoreProvider>
        <LocationProvider>{children}</LocationProvider>
      </StoreProvider>
    </SessionProvider>
  );
}

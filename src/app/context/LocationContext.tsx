"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type LocationContextType = {
  location: string | null;
  setLocation: (loc: string) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocationState] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("location");
    if (stored) {
      setLocationState(stored);
    }
  }, []);

  // Save to localStorage whenever location changes
  const setLocation = (loc: string) => {
    setLocationState(loc);
    localStorage.setItem("location", loc);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within LocationProvider");
  }
  return context;
}

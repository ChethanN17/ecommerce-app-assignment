"use client";

import { useLocation } from "@/app/context/LocationContext";
import { useState } from "react";
import styles from "./LocationSelector.module.css";

const cities = ["Bengaluru", "Mumbai", "Delhi", "Chennai", "Hyderabad"];

export default function LocationSelector() {
  const { location, setLocation } = useLocation();
  const [autoDetecting, setAutoDetecting] = useState(false);

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in your browser.");
      return;
    }
    setAutoDetecting(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        // Just for demo: real app would call a geocoding API
        setLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
        setAutoDetecting(false);
      },
      () => {
        alert("Unable to fetch location.");
        setAutoDetecting(false);
      }
    );
  };

  return (
    <div className={styles.container}>
      <label>Select Delivery Location: </label>
      <select
        value={location || ""}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.dropdown}
      >
        <option value="">-- Choose City --</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <button
        className={styles.button}
        onClick={handleDetectLocation}
        disabled={autoDetecting}
      >
        {autoDetecting ? "Detecting..." : "Auto Detect Location"}
      </button>

      {location && <p className={styles.selected}>📍 Current: {location}</p>}
    </div>
  );
}

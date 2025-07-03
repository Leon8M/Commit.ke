// app/components/ClientLayoutWrapper.tsx
"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This logic ensures the loading screen only appears once per session
    if (sessionStorage.getItem("visited")) {
      setLoading(false);
    } else {
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  // If we are still in the initial loading state, show the loading screen.
  if (loading) {
    return <LoadingScreen onFinished={() => setLoading(false)} />;
  }

  // Otherwise, show the actual page content.
  return <>{children}</>;
}
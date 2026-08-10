"use client";

import { useEffect, useState } from "react";
import { brandCopy } from "@/config/copy";

export function LoadingMessages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % brandCopy.loading.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      key={index}
      className="loading-msg-fade font-mono text-sm text-muted"
      aria-live="polite"
    >
      {brandCopy.loading[index]}
    </p>
  );
}

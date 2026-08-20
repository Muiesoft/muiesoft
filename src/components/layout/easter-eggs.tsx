"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export function EasterEggs() {
  useEffect(() => {
    const githubLine = siteConfig.github
      ? siteConfig.github
      : "Repository public în lucru.";
    console.info(
      `%cHei, devule.\n\nDacă tot ai deschis consola:\n${githubLine}\n\nPR > rant.`,
      "color:#f2c14e;font-family:monospace;font-size:12px;",
    );
  }, []);

  return null;
}

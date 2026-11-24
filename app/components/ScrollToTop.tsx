"use client";

import { useLayoutEffect } from "react";

/** Porta la pagina in cima all'arrivo (la pagina precedente può essere più lunga). */
export default function ScrollToTop() {
  useLayoutEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return null;
}

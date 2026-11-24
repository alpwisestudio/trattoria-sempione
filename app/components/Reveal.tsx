"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".hero-copy > *",
  ".hero-art",
  ".strip-inner",
  ".title",
  ".sub",
  ".card",
  ".story-copy > *",
  ".story-panel",
  ".facts > div",
  ".hours-card",
  ".map",
  "blockquote",
  ".site-footer > *",
].join(",");

export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    els.forEach((el) => {
      const idx = Array.from(el.parentElement?.children ?? []).indexOf(el);
      el.dataset.reveal = "";
      el.style.setProperty("--d", `${Math.min(idx, 5) * 90}ms`);
    });
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav a"));
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href") ?? ""))
      .filter((s): s is HTMLElement => !!s);
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));

    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("scrolled", scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      spy.disconnect();
      removeEventListener("scroll", onScroll);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}

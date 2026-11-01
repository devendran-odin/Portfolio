import { useEffect } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades + lifts every `[data-reveal]` element inside `rootRef` when it
 * scrolls into view. Optional `data-delay="120"` (ms) staggers items.
 */
export function useReveal(rootRef, deps = []) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const els = [...root.querySelectorAll("[data-reveal]")].filter(
      (el) => !el.dataset.shown
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translate3d(0,28px,0)";
      el.style.transition =
        "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)";
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          el.style.transitionDelay = `${parseInt(el.dataset.delay || "0", 10)}ms`;
          el.style.opacity = "1";
          el.style.transform = "none";
          el.dataset.shown = "1";
          io.unobserve(el);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

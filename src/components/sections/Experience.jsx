import { useEffect, useRef } from "react";
import { PiArrowRightBold, PiCalendarBlank, PiMapPin } from "react-icons/pi";
import { experience } from "../../data/experience";
import { prefersReducedMotion } from "../../hooks/useReveal";

const Pill = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface-2 px-3 py-[5px] text-[13px] font-medium">
    <Icon />
    {children}
  </span>
);

export const Experience = () => {
  const tlRef = useRef(null);
  const fillRef = useRef(null);

  // Fill the timeline line and light up dots as the user scrolls past them.
  useEffect(() => {
    const tl = tlRef.current;
    const fill = fillRef.current;
    if (!tl || !fill) return;
    const reduced = prefersReducedMotion();
    let raf = null;

    const update = () => {
      raf = null;
      const mark = window.innerHeight * 0.62;
      const r = tl.getBoundingClientRect();
      const p = reduced ? 1 : Math.max(0, Math.min(1, (mark - r.top) / Math.max(1, r.height)));
      fill.style.transform = `scaleY(${p})`;
      tl.querySelectorAll("[data-dot]").forEach((dot) => {
        const on = reduced || dot.getBoundingClientRect().top < mark;
        if (on === !!dot.dataset.on) return;
        dot.dataset.on = on ? "1" : "";
        dot.style.borderColor = on ? "var(--color-mint)" : "";
        dot.style.animation = on && !reduced ? "pulse-ring 2.4s ease-out infinite" : "";
        const core = dot.firstElementChild;
        if (core) core.style.background = on ? "var(--color-mint)" : "";
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!experience.length) return null;

  return (
    <section id="experience" className="pb-[clamp(88px,13vw,160px)] pt-[clamp(40px,6vw,80px)]">
      <div className="container-page flex flex-wrap gap-[clamp(28px,5vw,72px)]">
        <div className="max-w-[360px] flex-[1_1_260px]">
          <div className="sticky top-24">
            <div data-reveal className="eyebrow">Experience</div>
            <h2 data-reveal data-delay="80" className="section-title mt-[18px]">
              Where I&apos;ve worked.
            </h2>
          </div>
        </div>

        <div ref={tlRef} className="relative min-w-0 flex-[999_1_420px]">
          <div aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-0.5 rounded-sm bg-line" />
          <div
            ref={fillRef}
            aria-hidden="true"
            className="absolute bottom-3 left-[11px] top-3 w-0.5 origin-top rounded-sm bg-gradient-to-b from-mint to-violet shadow-[0_0_12px_rgba(124,240,201,.45)] transition-transform duration-150 ease-out"
            style={{ transform: "scaleY(0)" }}
          />
          {experience.map((job, i) => (
            <article
              key={`${job.role}-${job.org}-${i}`}
              data-reveal
              className="relative pb-[clamp(24px,4vw,40px)] pl-[clamp(40px,6vw,60px)]"
            >
              <span
                data-dot
                aria-hidden="true"
                className="absolute left-0 top-[26px] grid h-6 w-6 place-items-center rounded-full border-2 border-line-strong bg-bg transition-[border-color] duration-[400ms]"
              >
                <span className="h-2 w-2 rounded-full bg-muted transition-[background] duration-[400ms]" />
              </span>

              <div className="card rounded-[20px] p-[clamp(20px,3vw,30px)]">
                <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2.5">
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <h3 className="font-display text-[clamp(21px,2.4vw,26px)] font-medium leading-tight tracking-[-0.02em]">
                      {job.role}
                    </h3>
                    {job.org && (
                      <div className="mt-1 text-base font-medium text-violet-ink">{job.org}</div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.dates && <Pill icon={PiCalendarBlank}>{job.dates}</Pill>}
                    {job.location && <Pill icon={PiMapPin}>{job.location}</Pill>}
                  </div>
                </div>

                {job.points?.length > 0 && (
                  <ul className="mt-[18px] flex list-none flex-col gap-3 p-0">
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-base leading-[1.55] text-muted [text-wrap:pretty]">
                        <PiArrowRightBold className="mt-[5px] flex-none text-sm text-mint" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {job.tags?.length > 0 && (
                  <div className="mt-[18px] flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="chip border border-mint/20 bg-mint/[.08] text-mint">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

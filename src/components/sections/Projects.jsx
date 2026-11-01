import { PiArrowUpRight } from "react-icons/pi";
import { projects } from "../../data/projects";
import { prefersReducedMotion } from "../../hooks/useReveal";

// Every image in src/assets/projects/ is bundled; data files refer to them by file name.
const images = import.meta.glob("../../assets/projects/*", {
  eager: true,
  import: "default",
});
const imageFor = (file) => images[`../../assets/projects/${file}`];

const tiltMove = (e) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.transform = prefersReducedMotion()
    ? "translateY(-4px)"
    : `perspective(1000px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 7}deg) translateY(-6px)`;
  el.style.transition = "transform .12s ease-out, box-shadow .35s, border-color .35s";
  el.style.boxShadow = "0 24px 60px -24px rgba(139,123,255,.45)";
  el.style.setProperty("--mx", `${x * 100}%`);
  el.style.setProperty("--my", `${y * 100}%`);
  const g = el.querySelector("[data-glow]");
  if (g) g.style.opacity = "1";
};

const tiltLeave = (e) => {
  const el = e.currentTarget;
  el.style.transition = "transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .35s, border-color .35s";
  el.style.transform = "";
  el.style.boxShadow = "";
  const g = el.querySelector("[data-glow]");
  if (g) g.style.opacity = "0";
};

export const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="pb-[clamp(88px,13vw,160px)] pt-[clamp(40px,6vw,80px)]">
      <div className="container-page">
        <div data-reveal className="eyebrow">Projects</div>
        <h2 data-reveal data-delay="80" className="section-title mt-[18px] max-w-[18ch]">
          Selected work.
        </h2>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-[clamp(16px,2vw,24px)]">
          {projects.map((p, i) => {
            const img = imageFor(p.image);
            const link = p.live || p.repo;
            return (
              <div key={p.title} data-reveal data-delay={(i % 3) * 110} className="min-w-0">
                <article
                  onMouseMove={tiltMove}
                  onMouseLeave={tiltLeave}
                  className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-line-strong bg-surface backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[350ms] ease-out-soft will-change-transform"
                >
                  <div
                    data-glow
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-[350ms]"
                    style={{
                      background:
                        "radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgba(139,123,255,.16), transparent 60%)",
                    }}
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-[45%] -right-[35%] aspect-square w-[90%] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.22),transparent_65%)]" />
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-[55%] -left-[35%] aspect-square w-[80%] rounded-full bg-[radial-gradient(circle,rgba(124,240,201,.14),transparent_65%)]" />

                  {img && (
                    <div className="relative z-[1] px-[clamp(12px,1.6vw,16px)] pt-[clamp(12px,1.6vw,16px)]">
                      <img
                        src={img}
                        alt={`${p.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        width="760"
                        height="760"
                        className="block aspect-square h-auto w-full rounded-[14px] object-contain"
                      />
                    </div>
                  )}

                  <div className="relative z-[3] flex flex-1 flex-col p-[clamp(20px,2.4vw,26px)]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        {p.meta && (
                          <div className="text-[13px] font-medium uppercase tracking-[.04em] text-muted">
                            {p.meta}
                          </div>
                        )}
                        <h3 className={`${p.meta ? "mt-1.5" : ""} font-display text-[clamp(21px,2.2vw,24px)] font-medium leading-tight tracking-[-0.02em]`}>
                          {p.title}
                        </h3>
                      </div>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${p.title}`}
                          title={`Open ${p.title}`}
                          className="grid h-10 w-10 flex-none place-items-center rounded-full border border-line-strong bg-surface-2 text-lg transition-[transform,border-color,color,background] duration-250 ease-out-soft hover:-translate-y-0.5 hover:border-mint hover:bg-mint/[.08] hover:text-mint active:scale-95"
                        >
                          <PiArrowUpRight />
                        </a>
                      )}
                    </div>
                    <p className="mt-2.5 text-[15.5px] leading-relaxed text-muted [text-wrap:pretty]">
                      {p.description}
                    </p>

                    {p.tags?.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {p.tags.map((t) => (
                          <span key={t} className="chip border border-violet/[.22] bg-violet/10 text-violet-ink">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

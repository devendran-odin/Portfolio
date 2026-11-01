import { useEffect, useState } from "react";
import { PiList, PiX, PiArrowUpRight, PiFileArrowDown } from "react-icons/pi";

export const Navbar = ({ links, resumeUrl }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 820px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-gradient-to-b from-white/[.045] to-white/[.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-[22px] backdrop-saturate-[170%]">
      <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-4 px-[clamp(16px,5vw,48px)]">
        <a
          href="#top"
          aria-label="Devendran, home"
          className="flex min-h-11 items-center gap-0.5 font-mono text-[clamp(21px,2.3vw,25px)] font-bold tracking-[-0.02em] transition-[gap] duration-[350ms] ease-out-soft hover:gap-[7px]"
        >
          <span className="text-violet-ink [text-shadow:0_0_20px_rgba(139,123,255,.75)]">&lt;</span>
          <span className="text-white">Devendran</span>
          <span className="text-mint [text-shadow:0_0_20px_rgba(124,240,201,.7)]">/&gt;</span>
        </a>

        <div className="hidden items-center gap-1.5 min-[820px]:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[10px] px-3.5 py-2.5 text-[15px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] px-3.5 py-2.5 text-[15px] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              Resume
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl border border-line bg-surface text-[21px] text-ink min-[820px]:hidden"
        >
          {open ? <PiX /> : <PiList />}
        </button>
      </nav>

      {open && (
        <div className="flex max-h-[calc(100svh-72px)] flex-col gap-0.5 overflow-y-auto border-t border-line px-[clamp(16px,5vw,48px)] pb-5 pt-2.5 anim-fade-up [animation-duration:.3s] min-[820px]:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="flex min-h-[52px] items-center justify-between border-b border-line px-1.5 font-display text-[22px] font-medium"
            >
              {l.label}
              <PiArrowUpRight className="text-lg text-muted" />
            </a>
          ))}
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-3.5 flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] border border-mint/35 text-[17px] font-medium text-mint"
            >
              <PiFileArrowDown className="text-[19px]" />
              Resume
            </a>
          )}
        </div>
      )}
    </header>
  );
};

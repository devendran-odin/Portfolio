import { useEffect, useRef, useState } from "react";

const FULL = "<Hello World/>";
const N = FULL.length; // 14
const TYPE_START = 300; // ms before the first character
const TYPE_STEP = 70; // ms between characters
const HOLD = 450; // ms to rest on the finished text
const EXIT = 750; // ms fade-out (matches the CSS transition below)

// "<" is violet, "/>" is mint, everything else is the normal ink colour.
const charClass = (i) =>
  i === 0
    ? "text-violet [text-shadow:0_0_24px_rgba(139,123,255,.6)]"
    : i >= 12
      ? "text-mint [text-shadow:0_0_24px_rgba(124,240,201,.55)]"
      : "";

/**
 * onReveal — called when the overlay starts fading (page content can animate in underneath)
 * onDone   — called when the overlay has fully faded and can be unmounted
 */
export const IntroScreen = ({ onReveal, onDone }) => {
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);
  const timers = useRef([]);
  const cb = useRef({ onReveal, onDone });
  cb.current = { onReveal, onDone };

  const clearAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const exit = (delay = 0) => {
    const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));
    later(() => {
      setExiting(true);
      cb.current.onReveal();
    }, delay);
    later(() => cb.current.onDone(), delay + EXIT);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    for (let i = 1; i <= N; i++) {
      timers.current.push(setTimeout(() => setStep(i), TYPE_START + i * TYPE_STEP));
    }
    exit(TYPE_START + N * TYPE_STEP + HOLD);
    return () => {
      clearAll();
      document.body.style.overflow = "";
    };
  }, []);

  const skip = () => {
    if (exiting) return;
    clearAll();
    setStep(N);
    exit(0);
  };

  return (
    <div
      aria-hidden="true"
      onClick={skip}
      className="fixed inset-0 z-[200] grid cursor-pointer place-items-center bg-[#06070a] p-6 transition-[opacity,visibility] ease-[cubic-bezier(.4,0,.2,1)]"
      style={{
        opacity: exiting ? 0 : 1,
        visibility: exiting ? "hidden" : "visible",
        transitionDuration: `${EXIT}ms`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.16),transparent_60%)] [animation:introGlow_1.2s_ease-out_both]"
      />
      <div
        className="relative flex w-[min(100%,640px)] flex-col items-center gap-[clamp(22px,3vw,32px)] transition-[transform,filter] ease-[cubic-bezier(.4,0,.2,1)]"
        style={{
          transform: exiting ? "scale(1.06)" : "none",
          filter: exiting ? "blur(6px)" : "none",
          transitionDuration: `${EXIT}ms`,
        }}
      >
        <div
          className="flex min-h-[1.3em] items-center whitespace-nowrap font-mono text-[clamp(30px,7vw,64px)] font-bold tracking-[-0.01em] text-ink"
        >
          {FULL.slice(0, step)
            .split("")
            .map((ch, i) => (
              <span
                key={i}
                className={`inline-block whitespace-pre [animation:charIn_.32s_cubic-bezier(.2,.7,.2,1)_both] ${charClass(i)}`}
              >
                {ch}
              </span>
            ))}
          <span className="ml-[.08em] inline-block h-[1em] w-[.09em] min-w-[3px] rounded-[2px] bg-mint shadow-[0_0_12px_rgba(124,240,201,.7)] [animation:caret_1.05s_ease-in-out_infinite]" />
        </div>
        <div className="h-[3px] w-[min(70%,360px)] overflow-hidden rounded-[3px] bg-white/[.08]">
          <div
            className="h-full w-full origin-left rounded-[3px] bg-gradient-to-r from-violet to-mint shadow-[0_0_12px_rgba(124,240,201,.6)] transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${step / N})` }}
          />
        </div>
      </div>
    </div>
  );
};

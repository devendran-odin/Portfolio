export const Background = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-55"
  >
    <div className="absolute left-[-18vmax] top-[-22vmax] h-[62vmax] w-[62vmax] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.55)_0%,rgba(139,123,255,0)_62%)] [animation:drift1_26s_ease-in-out_infinite_alternate] will-change-transform" />
    <div className="absolute right-[-16vmax] top-[8vh] h-[52vmax] w-[52vmax] rounded-full bg-[radial-gradient(circle,rgba(124,240,201,.38)_0%,rgba(124,240,201,0)_62%)] [animation:drift2_32s_ease-in-out_infinite_alternate] will-change-transform" />
    <div className="absolute bottom-[-30vmax] left-[30vw] h-[44vmax] w-[44vmax] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.3)_0%,rgba(139,123,255,0)_62%)] [animation:drift3_38s_ease-in-out_infinite_alternate] will-change-transform" />
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-line) 1px,transparent 1px),linear-gradient(90deg,var(--color-line) 1px,transparent 1px)",
        backgroundSize: "72px 72px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 55% at 50% 0%,#000 0%,transparent 75%)",
        maskImage:
          "radial-gradient(ellipse 70% 55% at 50% 0%,#000 0%,transparent 75%)",
      }}
    />
  </div>
);

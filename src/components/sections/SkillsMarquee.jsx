import { PiStarFourFill } from "react-icons/pi";
import { skillGroups } from "../../data/skills";

const names = skillGroups.flatMap((g) => g.items.map((i) => i.name));

export const SkillsMarquee = () => {
  if (!names.length) return null;
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...names, ...names];

  return (
    <section
      aria-label="Technologies"
      className="overflow-hidden border-y border-line bg-surface py-[clamp(18px,2.6vw,28px)] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="flex w-max [animation:marquee_36s_linear_infinite] will-change-transform hover:[animation-play-state:paused]">
        {loop.map((name, i) => (
          <div
            key={i}
            aria-hidden={i >= names.length}
            className="flex items-center gap-[clamp(20px,3vw,36px)] whitespace-nowrap pr-[clamp(20px,3vw,36px)] font-display text-[clamp(22px,3.2vw,38px)] font-medium tracking-[-0.02em]"
          >
            <span>{name}</span>
            <PiStarFourFill className="text-[.5em] text-mint" />
          </div>
        ))}
      </div>
    </section>
  );
};

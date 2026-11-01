import { PiGraduationCap } from "react-icons/pi";
import { profile } from "../../data/profile";
import { skillGroups } from "../../data/skills";
import { ICONS, logoFor } from "../icons";

const SkillIcon = ({ item }) => {
  const src = logoFor(item.logo);
  if (!src) {
    const Fallback = ICONS.code;
    return <Fallback className="text-xl text-ink" />;
  }
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      width="22"
      height="22"
      className={`h-[22px] w-[22px] object-contain ${
        item.invert ? "[filter:invert(1)_hue-rotate(180deg)_brightness(1.1)]" : ""
      }`}
    />
  );
};

export const About = () => {
  const { about, education } = profile;

  return (
    <section id="about" className="py-[clamp(88px,13vw,160px)]">
      <div className="container-page flex flex-wrap items-start gap-[clamp(40px,5vw,72px)]">
        <div className="min-w-0 max-w-[560px] flex-[1_1_400px]">
          <div data-reveal className="eyebrow">About</div>
          <h2 data-reveal data-delay="80" className="section-title mt-[18px]">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              data-delay={160 + i * 60}
              className={`${i === 0 ? "mt-6" : "mt-4"} max-w-[60ch] text-[clamp(16px,1.5vw,18px)] text-muted [text-wrap:pretty]`}
            >
              {p}
            </p>
          ))}

          {education && (
            <div
              data-reveal
              data-delay="280"
              className="card mt-[clamp(24px,3.5vw,36px)] flex items-start gap-4 rounded-[18px] px-[22px] py-5"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-violet/25 bg-violet/12 text-[22px] text-violet-ink">
                <PiGraduationCap />
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-medium uppercase tracking-[.06em] text-muted">
                  Education · {education.years}
                </div>
                <div className="mt-1 font-display text-xl font-medium leading-tight tracking-[-0.01em]">
                  {education.degree}
                </div>
                <div className="mt-0.5 text-[15px] font-medium text-violet-ink">
                  {education.school}
                </div>
                {education.coursework && (
                  <div className="mt-2.5 text-[14.5px] leading-[1.55] text-muted [text-wrap:pretty]">
                    Coursework: {education.coursework}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {skillGroups.length > 0 && (
          <div id="stack" className="min-w-0 flex-[1_1_460px]">
            <div data-reveal className="eyebrow">Tech stack</div>
            <p data-reveal data-delay="80" className="mt-3.5 text-[clamp(16px,1.5vw,18px)] text-muted">
              The tools I use to bring ideas to life.
            </p>
            <div className="mt-[clamp(20px,2.5vw,28px)] grid grid-cols-1 gap-4">
              {skillGroups.map((g, gi) => {
                const GroupIcon = ICONS[g.icon] || ICONS.code;
                return (
                  <div
                    key={g.title}
                    data-reveal
                    data-delay={gi * 120}
                    className="card relative overflow-hidden rounded-[22px] p-[clamp(20px,2.4vw,26px)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-[120px] -top-[160px] h-80 w-80 rounded-full"
                      style={{ background: `radial-gradient(circle, ${g.glow}, transparent 65%)` }}
                    />
                    <div className="relative flex items-center gap-3.5">
                      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-line-strong bg-surface-2 text-[22px] text-mint">
                        <GroupIcon />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-[clamp(20px,2.2vw,24px)] font-medium leading-tight tracking-[-0.02em]">
                          {g.title}
                        </h3>
                        <div className="text-sm text-muted">{g.sub}</div>
                      </div>
                    </div>
                    <div className="relative mt-[18px] flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <div
                          key={s.name}
                          className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-line bg-surface-2 py-[5px] pl-[5px] pr-3 text-[14.5px] font-medium transition-[transform,border-color,background] duration-250 ease-out-soft hover:-translate-y-0.5 hover:border-violet/50 hover:bg-white/[.07]"
                        >
                          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[9px] bg-white/[.06]">
                            <SkillIcon item={s} />
                          </span>
                          {s.name}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

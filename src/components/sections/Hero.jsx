import { PiArrowDown, PiFileArrowDown } from "react-icons/pi";
import { profile } from "../../data/profile";

// The hero is always rendered (so the headline paints immediately — good for LCP/SEO),
// but its entrance animations stay paused until the intro screen hands over (`ready`).
export const Hero = ({ ready }) => (
  <section
    id="top"
    className={`relative flex min-h-svh items-center pb-[clamp(88px,12vh,140px)] pt-[clamp(108px,16vh,180px)] ${ready ? "" : "hero-wait"}`}
  >
    <>
        <div className="container-page">
          {profile.availability.show && (
            <div className="anim-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface py-2 pl-3 pr-3.5 text-sm font-medium [animation-delay:.05s] sm:mb-7">
              <span className="h-2 w-2 rounded-full bg-mint [animation:pulse-ring_2.2s_ease-out_infinite]" />
              {profile.availability.text}
            </div>
          )}

          <p className="anim-fade-up flex flex-wrap gap-x-2.5 gap-y-1.5 text-[clamp(19px,2vw,20px)] text-ink/75 [animation-delay:.15s]">
            <span>
              Hi, I&apos;m <span className="font-medium text-ink">{profile.name}</span> 👋
            </span>
            <span className="text-mint">{profile.roles}</span>
          </p>

          <h1 className="anim-rise mt-6 max-w-[13ch] font-display text-[clamp(46px,8.4vw,112px)] font-medium leading-[1.02] tracking-[-0.045em] [animation-delay:.28s] [animation-duration:1s] [text-wrap:balance] sm:mt-4 sm:leading-none">
            {profile.headline}{" "}
            <span className="gradient-text">{profile.headlineAccent}</span>
          </h1>

          <div className="anim-fade-up mt-10 flex max-w-[440px] flex-wrap gap-3 [animation-delay:.56s] sm:mt-[clamp(28px,4vw,40px)]">
            <a
              href="#projects"
              className="inline-flex min-h-14 flex-[1_1_170px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[14px] bg-gradient-to-br from-mint to-[#a7f5dc] px-6 text-base font-semibold text-on-accent shadow-[0_8px_30px_-10px_rgba(124,240,201,.55)] transition-[transform,box-shadow] duration-250 ease-out-soft hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(124,240,201,.7)] active:scale-[.97] sm:min-h-[52px]"
            >
              View my work
              <PiArrowDown className="text-[17px]" />
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 flex-[1_1_150px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[14px] border border-mint/40 px-[22px] text-base font-medium text-mint transition-[transform,background,border-color] duration-250 ease-out-soft hover:-translate-y-0.5 hover:border-mint hover:bg-mint/[.08] active:scale-[.97] sm:min-h-[52px]"
              >
                <PiFileArrowDown className="text-lg" />
                Resume
              </a>
            )}
          </div>
        </div>

        {/* Scroll cue — phones only; hidden on short screens where it could overlap the buttons */}
        <a
          href="#about"
          aria-label="Scroll to About"
          className="anim-fade-up absolute bottom-[clamp(20px,4vh,36px)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-xs font-medium uppercase tracking-[.2em] text-muted transition-colors [animation-delay:.9s] hover:text-mint md:hidden [@media(max-height:640px)]:hidden"
        >
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-line-strong">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-mint [animation:scrollCue_1.8s_cubic-bezier(.6,0,.4,1)_infinite]" />
          </span>
        </a>
    </>
  </section>
);

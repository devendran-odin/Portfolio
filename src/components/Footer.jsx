import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { profile } from "../data/profile";

const Footer = () => {
  const socials = [
    { label: "GitHub", href: profile.githubUrl, icon: PiGithubLogoFill },
    { label: "LinkedIn", href: profile.linkedinUrl, icon: PiLinkedinLogoFill },
  ].filter((s) => s.href);

  return (
    <footer className="relative z-[1] mx-auto flex max-w-[1180px] flex-col items-center gap-[18px] px-[clamp(20px,5vw,48px)] pb-10 pt-[clamp(48px,7vw,72px)] text-center">
      <div className="flex gap-2.5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="card grid h-12 w-12 place-items-center rounded-[14px] text-2xl transition-[transform,border-color,color] duration-250 ease-out-soft hover:-translate-y-[3px] hover:border-violet hover:text-mint active:scale-95"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p className="m-0 text-[15px] text-muted">
        Made with{" "}
        <span role="img" aria-label="love" className="text-[#ff6b81]">
          ❤
        </span>{" "}
        by Dev © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

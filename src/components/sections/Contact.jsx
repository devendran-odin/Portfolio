import { useState } from "react";
import emailjs from "emailjs-com";
import { PiWarningCircle, PiPaperPlaneTilt, PiCheckBold } from "react-icons/pi";
import { profile } from "../../data/profile";

export const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");
  const [sentName, setSentName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const from = form.elements.email.value.trim();
    const msg = form.elements.message.value.trim();

    if (!name || !from || !msg) return setError("Please fill in your name, email and message.");
    if (!/^\S+@\S+\.\S+$/.test(from)) return setError("Please enter a valid email address.");

    setError("");
    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setSentName(name.split(" ")[0]);
        setStatus("sent");
        form.reset();
      })
      .catch(() => {
        setStatus("idle");
        setError("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="relative pt-[clamp(56px,8vw,100px)]">
      <div className="container-page">
        <div
          data-reveal
          className="relative flex flex-wrap gap-[clamp(32px,5vw,72px)] overflow-hidden rounded-[clamp(22px,3vw,32px)] border border-line-strong bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(28px,6vw,72px)]"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-[20%] -top-1/2 aspect-square w-[70%] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,.28),transparent_65%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-[60%] -left-[20%] aspect-square w-[60%] rounded-full bg-[radial-gradient(circle,rgba(124,240,201,.2),transparent_65%)]" />

          <div className="relative flex min-w-0 flex-[1_1_320px] flex-col">
            <div className="eyebrow">Get in touch</div>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(38px,5.6vw,76px)] font-medium leading-none tracking-[-0.045em] [text-wrap:balance]">
              {profile.contact.title}{" "}
              <span className="gradient-text">{profile.contact.titleAccent}</span>
            </h2>
            <p className="mt-[clamp(18px,2.5vw,24px)] max-w-[44ch] text-[clamp(16px,1.5vw,18px)] text-muted [text-wrap:pretty]">
              {profile.contact.text}
            </p>
          </div>

          <div className="relative min-w-0 flex-[1_1_360px]">
            {status === "sent" ? (
              <div
                role="status"
                className="anim-fade-up flex h-full min-h-80 flex-col items-start justify-center gap-3.5 rounded-[20px] border border-mint/30 bg-mint/[.05] p-[clamp(24px,4vw,40px)] [animation-duration:.5s]"
              >
                <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-mint/[.14] text-[26px] text-mint">
                  <PiCheckBold />
                </span>
                <div className="font-display text-[clamp(24px,3vw,30px)] font-medium tracking-[-0.02em]">
                  Thanks, {sentName}!
                </div>
                <p className="m-0 max-w-[40ch] text-muted">
                  Your message has been sent — I&apos;ll get back to you as soon as I can.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="min-h-11 cursor-pointer rounded-xl border border-line-strong bg-transparent px-4 text-[15px] transition-colors hover:border-mint"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <label className="flex flex-col gap-2 text-sm font-medium text-muted">
                  Name
                  <input name="name" type="text" autoComplete="name" placeholder="Your name" required className="field" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-muted">
                  Email
                  <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="field" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-muted">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or role…"
                    required
                    className="field min-h-[168px] resize-y px-[18px] py-4 leading-[1.55]"
                  />
                </label>
                {error && (
                  <div role="alert" className="flex items-center gap-2 text-sm text-[#ffb4b4]">
                    <PiWarningCircle className="text-[17px]" />
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 flex min-h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-[14px] border border-violet/45 bg-gradient-to-r from-violet/[.22] to-mint/[.12] font-display text-[17px] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,.06)] transition-[transform,border-color,box-shadow] duration-250 ease-out-soft hover:-translate-y-0.5 hover:border-mint hover:shadow-[0_12px_36px_-14px_rgba(124,240,201,.5)] active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <PiPaperPlaneTilt className="text-lg text-mint" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

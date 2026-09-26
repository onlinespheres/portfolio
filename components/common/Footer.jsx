import { SOCIAL_LINKS } from "./social-links";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="container flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-lg font-bold tracking-wide text-heading">
          RJ
        </span>

        <p className="text-sm text-subtext">
          &copy; 2026 Ranjit Jana. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-subtext transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

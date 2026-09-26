"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Contact"];

const navContainer = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const overlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <span className="text-xl font-bold tracking-wide text-heading">
              RJ
            </span>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    i === 0 ? "text-heading" : "text-subtext"
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-transform hover:scale-105"
              >
                Let&apos;s Talk
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-heading lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile nav overlay — covers the entire viewport
          regardless of what page content sits behind it, so it never
          lets page content bleed through below the link list */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-md lg:hidden"
          >
            <nav className="container flex h-full flex-col justify-center gap-6 pb-24">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-subtext transition-colors hover:text-accent"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface"
              >
                Let&apos;s Talk
                <span aria-hidden="true">&rarr;</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

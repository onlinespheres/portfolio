"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Passion for Coding" },
];

const contentContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-white/10 bg-surface"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/images/about-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
      </div>

      {/* Dark overlay: top-to-bottom on mobile, left-to-right on desktop —
          matches the Hero's treatment for a consistent look */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-surface via-surface/70 to-surface/20 lg:bg-linear-to-r lg:from-surface lg:via-surface/75 lg:to-transparent" />
      {/* Flat black overlay on top of the image for extra legibility over the
          busy laptop-screen/desk detail */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      {/* Outer container matches Hero's exact structure: `container` (which
          carries margin-inline:auto) stays on its own wrapper, and the
          max-width cap lives on the inner child instead — putting both on
          the same element made `lg:max-w-xl` win the cascade and get
          re-centered by the container's auto margins, shifting this section
          ~390px right of Hero's identical-looking content. */}
      <div className="container relative z-20 flex w-full flex-col">
        <motion.div
          variants={contentContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start gap-6 py-24 lg:max-w-xl lg:py-32"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold tracking-widest text-accent"
          >
            GET TO KNOW ME
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl font-extrabold leading-tight text-heading sm:text-4xl lg:text-5xl"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="max-w-md text-base leading-relaxed text-subtext sm:text-lg"
          >
            I&apos;m a FullStack Web Developer who loves turning ideas into
            beautiful and functional web experiences. I enjoy learning new
            technologies and building products that make a difference.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-8 pt-2">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-subtext">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.a
            variants={item}
            href="#projects"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
          >
            More About Me
            <span aria-hidden="true">&rarr;</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

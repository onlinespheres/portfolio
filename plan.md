# Portfolio V3 - Product Plan

## Goal

Build a **multi-page** personal portfolio for Ranjit Jana. It should feel cinematic, premium, modern, and interactive, not like a basic static portfolio. The work begins by completing the **Home page**; each navigation item will later have its own dedicated page.

## Design System

Use this visual identity consistently across every page and component:

| Role | Token | Value |
| --- | --- | --- |
| Main background | `surface` | `#0B0F14` |
| Accent / CTA | `accent` | `#FF8A00` |
| Primary heading text | `heading` | `#F8F9FA` |
| Secondary / body text | `subtext` | `#A0AEC0` |

- Style: dark, modern, minimal, bold and clean.
- Orange is reserved for emphasis: CTAs, links, active states, stats, highlights, and small visual details.
- Use cinematic image backgrounds with dark gradients/overlays to protect readability.
- Keep strong typography, generous spacing, subtle borders, rounded cards, and a personal/editorial feel.
- Personal visual motifs may include handwritten-style short quotes, where they support the section rather than distract from it.

## Experience and Motion Principles

The site should feel highly polished and scroll-driven while remaining comfortable and usable.

- Smooth scroll-driven reveal animations.
- Controlled zoom-in and zoom-out effects on media/backgrounds.
- Parallax layers and gentle background movement.
- Section transitions and staggered text/card entrances.
- Premium hover states: scale, tilt, glow, image crop/zoom, and detail reveals where appropriate.
- Use relevant, lightweight Lottie animations in suitable areas.
- Prefer cinematic scroll pacing over literal scroll hijacking: never trap the visitor, break keyboard navigation, or make normal scrolling difficult.
- Respect `prefers-reduced-motion` and keep animation durations and transforms performant.
- On mobile, use a clean, efficient version of interactions; reserve intensive parallax/scroll effects for capable desktop viewports.

## Site Architecture (Dedicated Pages)

This is **not** a single-page portfolio. Navigation should lead to dedicated pages.

1. **Home** — visual introduction, previews of skills/projects, and clear calls to action.
2. **About** — full personal story, experience, education, and achievements.
3. **Projects / Work** — all projects, detailed case studies, live links, and GitHub links.
4. **Skills** — technology stack, tools, and areas of expertise.
5. **Contact** — contact form, contact links, and location if desired.
6. **Resume** — current resume view/download entry point.

## Current State

- Home currently includes a **Hero** and an **About preview**.
- The project uses Next.js, Tailwind CSS, Framer Motion, and local image assets.
- Existing Hero / About styling is the baseline for the rest of the new visual language.
- The old live portfolio is a reference for real content and links, but the new site must use the current resume as the source of truth for professional details.

## Home Page Completion Roadmap

Build the remaining Home sections in this order:

1. **Skills preview**
   - Curated tech stack rather than an overwhelming list.
   - Animated technology cards/icons with a floating code, terminal, or abstract developer-themed Lottie animation.
   - Gentle depth/parallax and on-scroll stagger effects.

2. **Featured projects preview**
   - Display selected best projects only; include a clear route to the full Projects page.
   - Use project imagery with hover zoom/crop, lift/tilt, and concise metadata.
   - Use a scroll-driven reveal sequence without making the card grid hard to scan.

3. **Experience / journey preview**
   - A compact animated timeline or career progression preview.
   - Route to the full About page for full experience/education detail.

4. **Contact call-to-action**
   - A direct, visually distinct invitation to work together.
   - Use a subtle, relevant message/send/contact Lottie animation.
   - Route to the dedicated Contact page.

5. **Footer**
   - Final polished exit point with navigation, social links, current contact details, and copyright.

## Image and Lottie Workflow

- Before generating or adding any new background image, define the exact section layout first.
- Provide a tailored image-generation prompt for every background-image request.
- Image prompts must preserve low-detail / negative space behind content, identify the dark cinematic visual treatment, use warm orange rim lighting where useful, and explicitly request **no readable text, letters, logos, or watermarks**.
- Every image must work with a dark overlay and support text contrast.
- Select Lottie files by meaning and placement: do not add motion merely as decoration.
- Prefer small, optimized assets and lazy-load non-critical visuals.

### Example Prompt Pattern — Projects Background

> Cinematic dark developer workspace at night, deep blue-black atmosphere, warm orange rim lighting, subtle monitors and desk texture positioned mainly on the right side, atmospheric shadows and light haze, generous dark low-detail negative space on the left for portfolio text and project cards, refined premium editorial photography, high contrast, no people, no readable text, no letters, no logos, no watermark.

## Content Rules

- Keep content truthful and aligned with the latest resume.
- Reuse verified links/content from the old portfolio only after confirming they are still current.
- Do not carry over the old black/purple neon visual style; this project uses the dark-orange system above.
- Keep Home previews concise; details belong on their dedicated pages.

## Working Agreement

1. Complete the Home page first.
2. For each Home section, decide the layout, animation behavior, Lottie need, and background image need before coding.
3. Keep the design system and performance/accessibility rules intact on all later pages.
4. Build the dedicated pages after Home is complete.

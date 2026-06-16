# Component Inventory

Source: src/App.tsx, src/components, src/data/portfolio.ts

## App Shell

- App: language state, localStorage language persistence, selected work-sample lightbox state.
- Navbar: sticky dark navigation, active-section tracking, mobile menu, language toggle.
- Reveal: intersection-observer reveal wrapper used around most page sections.
- ArtifactLightbox: zoomable/pannable work-sample viewer with keyboard/focus handling.

## Section Components

1. Hero (home) - Hero.
2. GameThinking (game-direction) - Game direction / product-domain positioning.
3. About (about) - Profile, background, education.
4. OrganizationsStrip (organizations) - Credibility logo marquee.
5. ToolsStrip (tools) - Toolset marquee.
6. SkillsMatrix (mindset) - Mindset, process, approach, skill groups.
7. ProofSnapshot (snapshot) - Stats and recommendation/social proof cards.
8. ProfessionalExperience (experience) - Vega projects and additional professional entries.
9. AdditionalExperience (additional-experience) - Supplemental operating/data background.
10. AcademicProjects (projects) - Academic and portfolio project cards.
11. WhyWorkWithMe (value) - Team value pillars.
12. ProductSamples (work-samples) - Supporting product writing sample.
13. Contact (contact) - Final CTA and links.
14. Footer (footer) - Footer contact and focus note.

## Reusable/Supporting Components

- SectionHeader: eyebrow, title, description pattern with inverse/wide variants.
- CvLink: guarded CV link with missing-file fallback message.
- CaseStudyCard: expandable case-study card with image previews, artifact tags, timeline/permission/matrix visual variants.
- ProjectCard: academic/portfolio project card with gradient treatment and work-sample image.
- ExperienceCard, ProofStrip, ProductProof, TrustProof: currently available supporting presentation components.

## Figma Component Candidates

- Button: primary, secondary, ghost, text-link.
- Badge/chip: section kicker, skill tag, tool chip, focus chip.
- Card: proof stat, trust/social proof, project card, work-sample artifact card, story/detail block.
- Device/artifact preview: desktop frame, phone frame, note overlay, image button.
- Navigation: desktop nav link, mobile nav link, language toggle.
- Logo tile and marquee strip.

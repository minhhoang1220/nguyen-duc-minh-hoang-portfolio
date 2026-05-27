import type { HeroArtifact, PortfolioContent } from "../data/portfolio";
import CvLink from "./CvLink";

type HeroProps = {
  personal: PortfolioContent["personal"];
  hero: PortfolioContent["hero"];
  cvFallback: string;
  linkedinAria: string;
  cvDownloadAria: string;
};

function Hero({ personal, hero, cvFallback, linkedinAria, cvDownloadAria }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line bg-cream py-12 md:py-16 lg:min-h-[calc(100vh-72px)] lg:py-20"
      aria-labelledby="hero-title"
    >
      <div className="container-main grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy">{personal.name}</p>
          <p className="mb-6 max-w-2xl text-base font-medium leading-7 text-muted md:text-lg">{hero.roleLine}</p>
          <h1
            id="hero-title"
            className="max-w-3xl text-balance text-[38px] font-semibold leading-[1.04] text-navy sm:text-[44px] md:text-[58px] lg:text-[64px] xl:text-[68px]"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink md:text-lg">{hero.intro}</p>
          <p className="mt-4 max-w-2xl border-l-2 border-navy pl-4 text-sm font-semibold leading-6 text-navy md:text-base">
            {hero.focusLine}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="#case-studies" aria-label={hero.ctas.caseStudies}>
              {hero.ctas.caseStudies}
            </a>
            <CvLink
              className="btn-secondary"
              href={personal.cv}
              email={personal.email}
              ariaLabel={cvDownloadAria}
              fallbackMessage={cvFallback}
            >
              {hero.ctas.cv}
            </CvLink>
            <a className="btn-ghost" href={personal.linkedin} aria-label={linkedinAria} target="_blank" rel="noreferrer">
              {hero.ctas.linkedin}
            </a>
          </div>
        </div>

        <div className="hero-artifact-shell" aria-label={hero.artifactAria}>
          <div className="absolute left-4 top-4 h-20 w-20 border border-line bg-cream md:left-6 md:top-6" aria-hidden="true" />
          <div className="floating-artifact relative z-10 grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
            {hero.artifacts.map((artifact, index) => (
              <HeroArtifactCard key={`${artifact.title}-${index}`} artifact={artifact} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroArtifactCard({ artifact, index }: { artifact: HeroArtifact; index: number }) {
  const offsetClass = index === 1 ? "sm:mt-8" : index === 2 ? "sm:-mt-4" : "";

  if (artifact.type === "image") {
    return (
      <figure className={`artifact-card grid min-h-[240px] content-between gap-4 ${offsetClass}`}>
        <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
          <figcaption className="artifact-label">{artifact.title}</figcaption>
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{artifact.meta}</span>
        </div>
        <div className="artifact-image-frame">
          <img
            src={artifact.image.src}
            alt={artifact.image.alt}
            className={`h-full w-full ${artifact.fit === "cover" ? "object-cover object-top" : "object-contain"}`}
            loading="eager"
            decoding="async"
          />
        </div>
      </figure>
    );
  }

  if (artifact.type === "matrix") {
    return (
      <div className={`artifact-card min-h-[220px] ${offsetClass}`}>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="artifact-label">{artifact.title}</span>
          <span className="text-[11px] font-semibold text-navy">{artifact.meta}</span>
        </div>
        <div className="grid grid-cols-[1.1fr_repeat(5,1fr)] gap-px bg-line text-[9px] font-semibold text-muted">
          <span className="bg-cream px-2 py-2 text-navy">{artifact.rowLabel}</span>
          {artifact.columnLabels.map((label) => (
            <span key={label} className="bg-cream px-2 py-2 text-navy">
              {label}
            </span>
          ))}
          {Array.from({ length: 30 }).map((_, cellIndex) => (
            <span
              key={cellIndex}
              className={`h-7 bg-card ${cellIndex % 6 === 0 ? "bg-cream" : ""} ${
                cellIndex % 8 === 0 || cellIndex % 11 === 0 ? "bg-sky/70" : ""
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`artifact-card min-h-[220px] ${offsetClass}`}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="artifact-label">{artifact.title}</span>
        <span className="text-[11px] font-semibold text-muted">{artifact.meta}</span>
      </div>
      <div className="space-y-3">
        {artifact.phases.map((phase, phaseIndex) => (
          <div key={phase} className="grid grid-cols-[88px_1fr] items-center gap-3 text-[11px] font-semibold text-navy">
            <span className="truncate text-muted">{phase}</span>
            <span className="relative h-5 bg-cream">
              <span
                className="absolute top-1/2 h-2 -translate-y-1/2 bg-navy"
                style={{
                  left: `${Math.min(phaseIndex * 13, 68)}%`,
                  width: `${phaseIndex % 2 === 0 ? 30 : 22}%`,
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

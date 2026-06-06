import { useEffect, useRef } from "react";
import type { AssetImage, HeroArtifact, PortfolioContent } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";
import CvLink from "./CvLink";

type HeroProps = {
  personal: PortfolioContent["personal"];
  hero: PortfolioContent["hero"];
  cvFallback: string;
  linkedinAria: string;
  cvDownloadAria: string;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

function Hero({
  personal,
  hero,
  cvFallback,
  linkedinAria,
  cvDownloadAria,
  openArtifactLabel,
  onImageOpen,
}: HeroProps) {
  const mainArtifact = hero.artifacts.find((artifact) => artifact.type === "image" && artifact.priority);
  const supportingArtifacts = hero.artifacts.filter((artifact) => artifact !== mainArtifact);
  const artifactStageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = artifactStageRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const updateArtifactMotion = () => {
      frame = 0;
      const progress = Math.min(Math.max(window.scrollY / 620, 0), 1);
      node.style.setProperty("--hero-artifact-y", `${progress * 18}px`);
      node.style.setProperty("--hero-artifact-scale", `${1 - progress * 0.025}`);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateArtifactMotion);
    };

    updateArtifactMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      id="home"
      className="section-hero relative overflow-hidden border-b border-line py-14 md:py-18 lg:min-h-[calc(100vh-72px)] lg:py-16"
      aria-labelledby="hero-title"
    >
      <div className="container-wide grid min-w-0 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] xl:gap-16">
        <div className="min-w-0 max-w-3xl">
          <div className="signature-card">
            <p
              className="text-[23px] font-semibold leading-tight tracking-[0.01em] text-cream sm:text-[26px] md:text-[30px]"
              aria-label={personal.name}
            >
              {personal.name.split(" ").map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="hero-name-word mr-[0.22em] last:mr-0"
                  aria-hidden="true"
                  style={{ animationDelay: `${180 + index * 70}ms` }}
                >
                  {word}
                </span>
              ))}
            </p>
            <p className="max-w-xl text-xs font-semibold uppercase tracking-[0.12em] text-sky md:text-sm">{personal.shortRole}</p>
          </div>
          <p className="mb-6 max-w-2xl text-base font-medium leading-7 text-muted md:text-lg">{hero.roleLine}</p>
          <h1
            id="hero-title"
            className="text-balance text-[clamp(2.1rem,5.2vw,3.65rem)] font-semibold leading-[1.06] text-navy"
          >
            <HighlightedHeadline text={hero.headline} />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink md:text-lg">{hero.intro}</p>

          <HeroUspPanel usp={hero.usp} />

          <ul className="mt-5 max-w-2xl space-y-2 border-l-2 border-navy pl-4 text-sm font-semibold leading-6 text-navy md:text-base">
            {hero.focusItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

        <div ref={artifactStageRef} className="hero-stage hero-artifact-scroll" aria-label={hero.artifactAria}>
          {mainArtifact?.type === "image" ? (
            <ArtifactImageButton
              artifact={mainArtifact}
              className="hero-main-artifact"
              imageClassName="object-cover object-top"
              showCaption
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
            />
          ) : null}

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {supportingArtifacts.map((artifact) => {
              if (artifact.type === "image") {
                const supportImageClass = artifact.image.src.includes("cdp-flow-report")
                  ? "object-cover object-[center_18%]"
                  : "object-cover object-top";

                return (
                  <ArtifactImageButton
                    key={artifact.title}
                    artifact={artifact}
                    className="hero-support-artifact"
                    imageClassName={supportImageClass}
                    showCaption={false}
                    openArtifactLabel={openArtifactLabel}
                    onImageOpen={onImageOpen}
                  />
                );
              }

              return <TimelineArtifact key={artifact.title} artifact={artifact} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroUspPanel({ usp }: { usp: PortfolioContent["hero"]["usp"] }) {
  return (
    <div className="usp-panel mt-6 max-w-2xl">
      <p className="trust-card-label">{usp.label}</p>
      <p className="mt-4 text-lg font-semibold leading-7 text-navy md:text-xl md:leading-8">{usp.statement}</p>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted md:grid-cols-2">
        {usp.signals.map((signal) => (
          <li key={signal} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
            <span>{signal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArtifactImageButton({
  artifact,
  className,
  imageClassName,
  showCaption = false,
  openArtifactLabel,
  onImageOpen,
}: {
  artifact: Extract<HeroArtifact, { type: "image" }>;
  className: string;
  imageClassName: string;
  showCaption?: boolean;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
}) {
  return (
    <figure className={`${className} group rounded-lg border border-line bg-card p-3 transition duration-500 hover:-translate-y-1 hover:border-navy/45`}>
      <button
        type="button"
        className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${artifact.image.title}`}
        onClick={() => onImageOpen(artifact.image)}
        onPointerEnter={() => preloadImage(artifact.image.src)}
        onFocus={() => preloadImage(artifact.image.src)}
      >
        <span className="mb-3 flex items-center justify-between gap-4 border-b border-line pb-3">
          <span className="artifact-label">{artifact.title}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{artifact.meta}</span>
        </span>
        <span className="artifact-media relative block overflow-hidden rounded-md bg-cream">
          <img
            src={artifact.image.previewSrc ?? artifact.image.src}
            alt={artifact.image.alt}
            className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${imageClassName}`}
            loading={showCaption ? "eager" : "lazy"}
            decoding="async"
          />
          <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {openArtifactLabel}
          </span>
        </span>
      </button>
      {showCaption && artifact.image.caption ? <figcaption className="mt-3 text-sm leading-6 text-muted">{artifact.image.caption}</figcaption> : null}
    </figure>
  );
}

function TimelineArtifact({ artifact }: { artifact: Extract<HeroArtifact, { type: "timeline" }> }) {
  return (
    <div className="hero-support-artifact rounded-lg border border-line bg-card p-4">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="artifact-label">{artifact.title}</span>
        <span className="text-[11px] font-semibold text-muted">{artifact.meta}</span>
      </div>
      <div className="space-y-3">
        {artifact.phases.map((phase, phaseIndex) => (
          <div key={phase} className="grid grid-cols-[92px_1fr] items-center gap-3 text-[11px] font-semibold text-navy">
            <span className="truncate text-muted">{phase}</span>
            <span className="relative h-6 bg-cream">
              <span
                className="absolute top-1/2 h-2.5 -translate-y-1/2 bg-navy"
                style={{
                  left: `${Math.min(phaseIndex * 12, 66)}%`,
                  width: `${phaseIndex % 2 === 0 ? 32 : 24}%`,
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HighlightedHeadline({ text }: { text: string }) {
  const target =
    ["Game Product and Operations", "Game Product và Operations", "clear product flows", "product flow rõ ràng"].find((phrase) =>
      text.includes(phrase),
    ) ?? "";

  if (!target) {
    return <>{text}</>;
  }

  const [before, after] = text.split(target);

  return (
    <>
      {before}
      <span className="gradient-underline">{target}</span>
      {after}
    </>
  );
}

export default Hero;

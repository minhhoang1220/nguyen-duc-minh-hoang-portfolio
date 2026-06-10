import { useEffect, useRef } from "react";
import type { AssetImage, HeroArtifact, HeroJourneyStep, PortfolioContent } from "../data/portfolio";
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
  const heroShellRef = useRef<HTMLElement | null>(null);
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
      node.style.setProperty("--hero-artifact-y", `${progress * 16}px`);
      node.style.setProperty("--hero-artifact-scale", `${1 - progress * 0.02}`);
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

  useEffect(() => {
    const node = heroShellRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updatePointerMotion = () => {
      frame = 0;
      node.style.setProperty("--hero-pointer-x", pointerX.toFixed(3));
      node.style.setProperty("--hero-pointer-y", pointerY.toFixed(3));
      node.style.setProperty("--hero-shift-x", `${pointerX * 8}px`);
      node.style.setProperty("--hero-shift-y", `${pointerY * 5}px`);
      node.style.setProperty("--hero-tilt-x", `${pointerY * -1.4}deg`);
      node.style.setProperty("--hero-tilt-y", `${pointerX * 1.8}deg`);
    };

    const requestPointerUpdate = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      if (!frame) {
        frame = window.requestAnimationFrame(updatePointerMotion);
      }
    };

    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      if (!frame) {
        frame = window.requestAnimationFrame(updatePointerMotion);
      }
    };

    node.addEventListener("pointermove", requestPointerUpdate, { passive: true });
    node.addEventListener("pointerleave", resetPointer);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      node.removeEventListener("pointermove", requestPointerUpdate);
      node.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <section
      ref={heroShellRef}
      id="home"
      className="section-hero hero-command-center relative overflow-hidden border-b border-line py-10 md:py-12 lg:min-h-[calc(100vh-72px)] lg:py-10"
      aria-labelledby="hero-title"
    >
      <div className="hero-command-backdrop" aria-hidden="true" />
      <div className="container-wide hero-command-layout grid min-w-0 items-start gap-9 lg:grid-cols-[0.9fr_1.1fr] xl:gap-12">
        <div className="hero-copy-stack min-w-0 max-w-3xl">
          <div className="command-identity">
            <span className="command-monogram" aria-hidden="true">
              NDMH
            </span>
            <div className="min-w-0">
              <p className="text-[22px] font-semibold leading-tight text-navy sm:text-[26px] md:text-[30px]" aria-label={personal.name}>
                {personal.name.split(" ").map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="hero-name-word mr-[0.22em] last:mr-0"
                    aria-hidden="true"
                    style={{ animationDelay: `${160 + index * 65}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </p>
              <p className="mt-2 max-w-xl text-xs font-bold uppercase tracking-[0.12em] text-navy-accent md:text-sm">{personal.shortRole}</p>
            </div>
          </div>

          <p className="command-role-line">{hero.roleLine}</p>
          <h1
            id="hero-title"
            className="text-balance text-[clamp(2.15rem,4.2vw,3.45rem)] font-semibold leading-[1.04] text-navy"
          >
            <HighlightedHeadline text={hero.headline} />
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink md:text-lg">{hero.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="#case-studies" aria-label={hero.ctas.caseStudies}>
              {hero.ctas.caseStudies}
            </a>
            <a className="btn-secondary" href="#game-direction" aria-label={hero.ctas.gameDirection}>
              {hero.ctas.gameDirection}
            </a>
          </div>

          <div className="command-secondary-links">
            <CvLink
              className="command-text-link"
              href={personal.cv}
              email={personal.email}
              ariaLabel={cvDownloadAria}
              fallbackMessage={cvFallback}
            >
              {hero.ctas.cv}
            </CvLink>
            <a className="command-text-link" href={personal.linkedin} aria-label={linkedinAria} target="_blank" rel="noreferrer">
              {hero.ctas.linkedin}
            </a>
          </div>
          <p className="command-compact-trust">{hero.trustHint}</p>

          <div className="hidden 2xl:block">
            <HeroSignalPanel usp={hero.usp} focusItems={hero.focusItems} trustHint={hero.trustHint} />
          </div>
        </div>

        <div ref={artifactStageRef} className="hero-command-visual" aria-label={hero.artifactAria}>
          <div className="command-visual-topline">
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>{hero.visual.topLabel}</span>
            <span>{hero.visual.proofLabel}</span>
          </div>

          <div className="command-center-grid">
            <div className="command-center-left">
              <CommandJourney journey={hero.journey} />
            </div>

            <div className="command-center-right">
              <div className="command-artifact-heading">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-sky">{hero.visual.artifactStackLabel}</p>
                <p className="text-sm font-semibold leading-6 text-cream/85">{hero.visual.anonymizedLabel}</p>
              </div>

              <div className="command-device-stage">
                {mainArtifact?.type === "image" ? (
                  <ArtifactImageButton
                    artifact={mainArtifact}
                    className="hero-main-artifact command-main-artifact command-device-desktop"
                    imageClassName="object-cover object-top"
                    showCaption
                    deviceLabel={hero.visual.desktopLabel}
                    openArtifactLabel={openArtifactLabel}
                    onImageOpen={onImageOpen}
                  />
                ) : null}

                <CommandTemplateArtifacts visual={hero.visual} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function HeroSignalPanel({
  usp,
  focusItems,
  trustHint,
}: {
  usp: PortfolioContent["hero"]["usp"];
  focusItems: string[];
  trustHint: string;
}) {
  return (
    <div className="hero-signal-panel mt-7 max-w-2xl">
      <div className="hero-signal-head">
        <p className="trust-card-label">{usp.label}</p>
        <p className="text-sm font-semibold leading-6 text-navy md:text-base md:leading-7">{usp.statement}</p>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {focusItems.map((item) => (
          <li key={item} className="command-focus-chip">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-medium leading-6 text-muted">{trustHint}</p>
    </div>
  );
}

function CommandJourney({ journey }: { journey: HeroJourneyStep[] }) {
  return (
    <ol className="command-journey" aria-label="Player signal to delivery artifact journey">
      {journey.map((step, index) => (
        <li key={step.label} className="command-journey-step">
          <span className="command-step-index">0{index + 1}</span>
          <span className="command-step-line" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-sky">{step.label}</p>
            <h2 className="mt-1 text-base font-semibold leading-tight text-cream">{step.title}</h2>
            <p className="command-step-body mt-2 text-xs leading-5">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ArtifactImageButton({
  artifact,
  className,
  imageClassName,
  showCaption = false,
  deviceLabel,
  openArtifactLabel,
  onImageOpen,
}: {
  artifact: Extract<HeroArtifact, { type: "image" }>;
  className: string;
  imageClassName: string;
  showCaption?: boolean;
  deviceLabel?: string;
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
          <span className="artifact-label">{deviceLabel ?? artifact.title}</span>
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

function CommandTemplateArtifacts({ visual }: { visual: PortfolioContent["hero"]["visual"] }) {
  return (
    <div className="command-template-layer" aria-label={visual.visualTemplateLabel}>
      <div className="command-note-overlay command-template-card">
        <p>{visual.noteLabel}</p>
        <strong>Campaign Logic</strong>
        <span>Trigger → Segment → Message → Drop-off</span>
        <div className="note-screen-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

function HighlightedHeadline({ text }: { text: string }) {
  const target =
    [
      "delivery-ready product artifacts",
      "artifact sản phẩm sẵn sàng triển khai",
      "Game Product and Operations",
      "Game Product và Operations",
      "clear product flows",
      "product flow rõ ràng",
    ].find((phrase) => text.includes(phrase)) ?? "";

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

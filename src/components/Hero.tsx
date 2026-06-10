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
  const detailsArtifact = hero.artifacts.find(
    (artifact) => artifact.type === "image" && !artifact.priority && artifact.title.toLowerCase().includes("performance")
  );
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
      className="section-hero hero-command-center relative overflow-hidden border-b border-cream/15 py-10 md:py-12 lg:min-h-[calc(100vh-72px)] lg:py-10 text-cream"
      aria-labelledby="hero-title"
    >
      <div className="hero-command-backdrop" aria-hidden="true" />
      <div className="container-wide hero-command-layout grid min-w-0 items-start gap-9 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
        <div className="hero-copy-stack min-w-0 max-w-3xl">
          <div className="command-identity">
            <span className="command-monogram !border-sky/30 !bg-[#162758] !text-sky shadow-glow-blue" aria-hidden="true">
              NDMH
            </span>
            <div className="min-w-0">
              <p className="text-[22px] font-semibold leading-tight text-cream sm:text-[26px] md:text-[30px]" aria-label={personal.name}>
                {personal.name.split(" ").map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="hero-name-word mr-[0.22em] last:mr-0 text-cream"
                    aria-hidden="true"
                    style={{ animationDelay: `${160 + index * 65}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </p>
              <p className="mt-2 max-w-xl text-xs font-bold uppercase tracking-[0.12em] text-sky md:text-sm">{personal.shortRole}</p>
            </div>
          </div>

          <p className="command-role-line !text-sky/80">{hero.roleLine}</p>
          <h1
            id="hero-title"
            className="text-balance text-[clamp(2.15rem,4.2vw,3.45rem)] font-semibold leading-[1.04] text-cream"
          >
            <HighlightedHeadline text={hero.headline} />
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cream/80 md:text-lg">{hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border-2 border-sky bg-sky px-5 py-2.5 text-sm md:text-base font-bold text-[#080E24] shadow-md transition duration-300 hover:-translate-y-px hover:bg-sky/90 hover:border-sky/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E24]" href="#case-studies" aria-label={hero.ctas.caseStudies}>
              {hero.ctas.caseStudies}
            </a>
            <a className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border-2 border-cream/30 bg-transparent px-5 py-2.5 text-sm md:text-base font-bold text-cream transition duration-300 hover:-translate-y-px hover:border-sky hover:text-sky focus:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E24]" href="#contact" aria-label={hero.ctas.contact}>
              {hero.ctas.contact}
            </a>
          </div>

          {/* Social/Contact block row */}
          <div className="mt-8 flex flex-wrap gap-4 border-t border-cream/15 pt-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-navy/10 bg-[#FCFBF8] px-4 py-2.5 text-sm font-semibold text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3] hover:border-navy/35 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-5 w-5 fill-current text-navy shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-navy/60">LinkedIn</span>
                <span className="text-xs text-navy">Connect</span>
              </div>
            </a>

            <CvLink
              className="inline-flex items-center gap-3 rounded-lg border border-navy/10 bg-[#FCFBF8] px-4 py-2.5 text-sm font-semibold text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3] hover:border-navy/35 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              href={personal.cv}
              email={personal.email}
              ariaLabel={cvDownloadAria}
              fallbackMessage={cvFallback}
            >
              <svg className="h-5 w-5 fill-none stroke-current text-navy stroke-2 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-navy/60">Download CV</span>
                <span className="text-xs text-navy">Resume PDF</span>
              </div>
            </CvLink>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 rounded-lg border border-navy/10 bg-[#FCFBF8] px-4 py-2.5 text-sm font-semibold text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3] hover:border-navy/35 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              title={personal.email}
              aria-label={`Email: ${personal.email}`}
            >
              <svg className="h-5 w-5 fill-none stroke-current text-navy stroke-2 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-navy/60">Email</span>
                <span className="text-xs text-navy hidden lg:inline-block">{personal.email}</span>
                <span className="text-xs text-navy inline-block lg:hidden">Email me</span>
              </div>
            </a>
          </div>

          <p className="mt-6 text-xs md:text-sm text-cream/70 border-l-2 border-sky/30 pl-3 leading-relaxed max-w-xl">{hero.trustHint}</p>
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

              <div className="command-device-stage relative overflow-hidden">
                {/* Glow Overlay */}
                <div className="parity-glow absolute -right-[20%] -top-[20%] opacity-50" />
                
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

                {/* Layered Detail/Performance Card */}
                {detailsArtifact?.type === "image" ? (
                  <button
                    type="button"
                    className="command-detail-card group/detail text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                    aria-label={`${openArtifactLabel}: ${detailsArtifact.image.title}`}
                    onClick={() => onImageOpen(detailsArtifact.image)}
                    onPointerEnter={() => preloadImage(detailsArtifact.image.src)}
                    onFocus={() => preloadImage(detailsArtifact.image.src)}
                  >
                    <div className="flex h-6 items-center justify-between border-b border-line bg-cream px-2 text-[8px] font-bold uppercase tracking-wider text-navy">
                      <span>{hero.visual.mobileLabel ?? "Performance & Drop-off"}</span>
                      <span className="text-muted text-[7px]">CDP Flow Metrics</span>
                    </div>
                    <div className="relative flex-1 overflow-hidden bg-cream">
                      <img
                        src={detailsArtifact.image.previewSrc ?? detailsArtifact.image.src}
                        alt={detailsArtifact.image.alt}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover/detail:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="pointer-events-none absolute inset-x-2 bottom-2 translate-y-1 rounded border border-cream/70 bg-navy/90 py-1 text-center text-[9px] font-semibold text-cream opacity-0 transition duration-300 group-hover/detail:translate-y-0 group-hover/detail:opacity-100">
                        {openArtifactLabel}
                      </span>
                    </div>
                  </button>
                ) : null}

                <CommandTemplateArtifacts visual={hero.visual} />

                {/* Sanitized Badge inside the stage */}
                <div className="absolute bottom-3 right-3 rounded bg-navy-accent/90 border border-sky/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cream shadow-sm z-30 select-none pointer-events-none">
                  {hero.visual.anonymizedLabel}
                </div>
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
  const steps = ["Trigger", "Segment", "Message", "Drop-off"];

  return (
    <div className="command-template-layer" aria-label={visual.visualTemplateLabel}>
      <div className="command-note-overlay command-template-card flex flex-col gap-2 p-3 bg-card border border-line border-l-4 border-l-navy-accent rounded-lg shadow-minimal select-none">
        <p className="text-[9px] font-bold uppercase tracking-wider text-navy-accent m-0">{visual.noteLabel}</p>
        <div className="flex flex-wrap items-center gap-1 mt-1">
          {steps.map((step, idx) => (
            <span key={step} className="flex items-center gap-1 text-[10px] font-semibold text-navy">
              <span className="bg-sky/20 border border-sky/35 px-1.5 py-0.5 rounded text-[10px]">
                {step}
              </span>
              {idx < steps.length - 1 && (
                <span className="text-muted text-[10px] font-normal">→</span>
              )}
            </span>
          ))}
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

import { useId, useState, type ReactNode } from "react";
import type { AssetImage, CaseStudy, PortfolioContent } from "../data/portfolio";
import { preloadImage } from "../utils/preloadImage";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  labels: PortfolioContent["caseStudyLabels"];
  index: number;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
};

const getBlockIcon = (type: string, customClass?: string) => {
  const baseClass = customClass ?? "w-4 h-4 text-cream inline-block shrink-0 align-text-bottom mr-1.5";
  switch (type) {
    case "problem":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "outcome":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "impact":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "context":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "decisions":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 11-6 0 3 3 0 016 0zm0 0c0 1.657 1.007 3 2.25 3S13.5 13.657 13.5 12s-1.007-3-2.25-3S9 10.343 9 12zm0 0h12M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "process":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
        </svg>
      );
    case "delivered":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "skills":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "evidence":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "supporting":
      return (
        <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      );
    default:
      return null;
  }
};

function CaseStudyCard({ caseStudy, labels, index, openArtifactLabel, onImageOpen }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = useId();
  const isReversed = index % 2 === 1;

  // Premium light cards with a subtle cream/green gradient, navy text, soft shadow, and dark-green accent borders
  const lightThemes = [
    "bg-gradient-to-br from-[#FCFBF8] via-[#f9faf7] to-[#ecf4ef] border-[#1d3f35]/20 text-navy hover:border-[#1d3f35]/45 shadow-sm",
    "bg-gradient-to-br from-[#FCFBF8] via-[#f9faf7] to-[#ecf4ef] border-[#1d3f35]/20 text-navy hover:border-[#1d3f35]/45 shadow-sm",
    "bg-gradient-to-br from-[#FCFBF8] via-[#f9faf7] to-[#ecf4ef] border-[#1d3f35]/20 text-navy hover:border-[#1d3f35]/45 shadow-sm",
  ];
  const theme = lightThemes[index % lightThemes.length];

  return (
    <article className={`case-study-card rounded-2xl border ${theme} p-6 md:p-10 lg:p-12 mb-8 text-navy transition duration-300`}>
      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <p className="section-kicker text-navy/70 mb-0">
              {labels.eyebrow} 0{index + 1}
            </p>
            {caseStudy.logo && (
              <img src={caseStudy.logo} alt="" className="cred-logo-md shrink-0" />
            )}
          </div>
          <h3 className="case-study-title max-w-3xl text-wrap-balance text-[30px] font-bold leading-[1.08] md:text-[44px] text-navy">{caseStudy.title}</h3>

          <div className="case-bottom-line mt-5 bg-navy/5 border border-navy/10 p-5 rounded-lg">
            <p className="case-bottom-label text-navy-accent font-bold text-xs uppercase tracking-wider mb-2">{labels.bottomLine}</p>
            <EmphasizedText className="text-base leading-7 text-ink/85 md:text-lg md:leading-8 text-wrap-pretty" text={caseStudy.summary} />
          </div>

          {caseStudy.artifactTags?.length ? <CaseArtifactTags tags={caseStudy.artifactTags} label={labels.artifactTags} /> : null}

          <CaseSnapshot caseStudy={caseStudy} labels={labels} />

          <button
            type="button"
            className="mt-8 min-h-11 rounded-md border border-navy/35 px-5 text-sm font-semibold text-navy transition duration-300 hover:-translate-y-px hover:bg-navy/10 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 focus:ring-offset-transparent"
            aria-controls={detailId}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? labels.hideDetails : labels.viewDetails}
          </button>
        </div>

        <div className="min-w-0 flex flex-col gap-6">
          {index === 0 && caseStudy.mainPreview ? (
            <Case1Visual
              mainPreview={caseStudy.mainPreview}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
              labels={labels}
            />
          ) : index === 1 && caseStudy.mainPreview ? (
            <Case2Visual
              mainPreview={caseStudy.mainPreview}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
              labels={labels}
            />
          ) : index === 2 && caseStudy.mainPreview ? (
            <Case3Visual
              mainPreview={caseStudy.mainPreview}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
              labels={labels}
            />
          ) : caseStudy.mainPreview ? (
            <ImagePreview
              image={caseStudy.mainPreview}
              detailImage={caseStudy.detailPreview}
              labels={labels}
              openArtifactLabel={openArtifactLabel}
              onImageOpen={onImageOpen}
            />
          ) : caseStudy.visualType === "timeline" ? (
            <TimelinePreview labels={labels} large />
          ) : (
            <PermissionPreview labels={labels} />
          )}

          {/* Key Evidence block relocated directly below the main visual preview */}
          <div className="case-evidence-box bg-white border border-navy/15 rounded-lg p-5 shadow-minimal">
            <p className="detail-label mb-4 flex items-center gap-1.5">
              {getBlockIcon("evidence")}
              {labels.evidence}
            </p>
            <ul className="grid gap-3">
              {caseStudy.evidence.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-navy/85 md:text-base md:leading-7">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div id={detailId} className={`${isExpanded ? "case-detail-panel block" : "hidden"} mt-8 border-t border-navy/15 pt-8`}>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3 flex items-center gap-1.5">{getBlockIcon("problem")}{labels.problem}</p>
            <EmphasizedText className="text-sm leading-6 text-ink/85 md:text-base md:leading-7" text={caseStudy.problem} />
          </DetailBlock>
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3 flex items-center gap-1.5">{getBlockIcon("outcome")}{labels.outcomeLearning}</p>
            <EmphasizedText className="text-sm leading-6 text-ink/85 md:text-base md:leading-7" text={caseStudy.outcomeLearning} />
          </DetailBlock>
          <DetailBlock emphasis="high">
            <p className="detail-label mb-3 flex items-center gap-1.5">{getBlockIcon("impact")}{labels.impact}</p>
            <EmphasizedText className="text-sm leading-6 text-ink/85 md:text-base md:leading-7" text={caseStudy.impact} />
          </DetailBlock>
          <DetailBlock emphasis="medium">
            <p className="detail-label mb-3 flex items-center gap-1.5">{getBlockIcon("context")}{labels.context}</p>
            <EmphasizedText className="text-sm leading-6 text-ink/85 md:text-base md:leading-7" text={caseStudy.context} />
          </DetailBlock>
          <DetailList emphasis="medium" title={labels.keyDecisions} items={caseStudy.keyDecisions} iconType="decisions" />
          <DetailList emphasis="medium" title={labels.process} items={caseStudy.process} iconType="process" />
          <DetailList emphasis="low" title={labels.deliveredArtifacts} items={caseStudy.artifacts} iconType="delivered" />
          <DetailBlock emphasis="low">
            <p className="detail-label mb-3 flex items-center gap-1.5">{getBlockIcon("delivered")}{labels.delivered}</p>
            <EmphasizedText className="text-sm leading-6 text-ink/85 md:text-base md:leading-7" text={caseStudy.delivered} />
          </DetailBlock>
          <DetailBlock emphasis="low">
            <p className="detail-label mb-3 flex items-center gap-1.5">{getBlockIcon("skills")}{labels.skills}</p>
            <div className="flex flex-wrap items-start gap-2">
              {caseStudy.skills.map((skill) => (
                <span key={skill} className="inline-flex w-fit max-w-full items-center rounded border border-navy/10 bg-navy/5 px-3 py-1.5 text-xs font-semibold leading-5 text-navy hover:border-navy hover:bg-navy/10 transition duration-300 shrink-0">
                  {skill}
                </span>
              ))}
            </div>
          </DetailBlock>
        </div>

        {/* Supporting visual work samples section spans full available width */}
        {index === 0 && (
          <div className="mt-8 border-t border-navy/15 pt-8">
            <h4 className="text-base font-bold uppercase tracking-[0.1em] text-navy mb-2 flex items-center gap-1.5">
              {getBlockIcon("supporting", "w-5 h-5 text-navy inline-block shrink-0 align-text-bottom mr-1.5")}
              Supporting Visual Work Samples
            </h4>
            <p className="text-xs text-ink/75 mb-6">Click to view high-resolution work samples:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                {
                  title: "Flow Canvas",
                  src: "/assets/case-studies/vega-canvas-flow.png",
                  previewSrc: "/assets/previews/vega-canvas-flow-preview.png",
                  alt: "Engagement flow canvas trigger flow layout",
                  caption: "Mapped campaign trigger, routing, and state logic so stakeholders and developers could review the automation flow before handoff.",
                },
                {
                  title: "Drop-off Analytics",
                  src: "/assets/case-studies/vega-flow-details.png",
                  previewSrc: "/assets/previews/vega-flow-details-preview.png",
                  alt: "Funnel drop-off analytics metrics dashboard",
                  caption: "Visualized event drop-off and funnel behavior to support QA review, reporting alignment, and iteration decisions.",
                },
                {
                  title: "Messenger Output",
                  src: "/assets/case-studies/vega-mess-chatbox.png",
                  previewSrc: "/assets/previews/vega-mess-chatbox-preview.png",
                  alt: "Messenger chatbox mockup output preview",
                  caption: "Previewed chatbot message output and user-facing states to validate the customer communication experience.",
                },
                {
                  title: "Facebook Segment",
                  src: "/assets/case-studies/vega-facebook-profile.png",
                  previewSrc: "/assets/previews/vega-facebook-profile-preview.png",
                  alt: "Facebook connected target user profile",
                  caption: "Captured segment/profile conditions used to clarify targeting logic and campaign audience rules.",
                },
                {
                  title: "Zalo Notification",
                  src: "/assets/case-studies/vega-zalo.png",
                  previewSrc: "/assets/previews/vega-zalo-preview.png",
                  alt: "Zalo official account notification layout preview",
                  caption: "Previewed OA notification behavior and message layout to align channel-specific delivery expectations.",
                },
              ].map((artifact) => {
                const isPhone = ["messenger", "facebook", "zalo"].some(term => artifact.title.toLowerCase().includes(term));
                return (
                  <button
                    key={artifact.title}
                    type="button"
                    className={`flex flex-col text-left rounded-xl border border-navy/15 bg-white overflow-hidden hover:border-navy hover:shadow-hover transition duration-300 focus:outline-none focus:ring-2 focus:ring-navy group/thumb ${isPhone ? "max-w-[200px] mx-auto w-full text-center" : "w-full"}`}
                    onClick={() => onImageOpen(artifact)}
                    onPointerEnter={() => preloadImage(artifact.src)}
                    onFocus={() => preloadImage(artifact.src)}
                  >
                    <div className={`relative w-full overflow-hidden flex flex-col justify-center bg-[#f8fafc] border-b border-navy/10 ${isPhone ? "aspect-[9/19] p-2 bg-[#080E24]" : "aspect-[16/10] p-2 bg-[#080E24]"}`}>
                      {isPhone ? (
                        <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-[#121620] border border-black/80 flex flex-col">
                          {/* iPhone Notch */}
                          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-20 pointer-events-none shadow-inner" />
                          <img
                            src={artifact.previewSrc}
                            alt={artifact.alt}
                            className="h-full w-full object-cover transition duration-700 group-hover/thumb:scale-[1.04]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex flex-col rounded-md overflow-hidden bg-[#faf8f2] border border-black/40">
                          {/* Browser Window Bar */}
                          <div className="h-6 bg-[#fafafa] border-b border-navy/10 flex items-center gap-1.5 px-2 shrink-0 select-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d56f5d]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d7aa4a]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#68a37d]" />
                            <div className="flex-1 max-w-[120px] mx-auto h-3.5 bg-black/5 rounded text-[8px] px-1 text-navy/40 flex items-center justify-center truncate">
                              vega-cdp.io
                            </div>
                          </div>
                          <div className="relative flex-1 overflow-hidden bg-[#faf8f2] flex items-center justify-center">
                            <img
                              src={artifact.previewSrc}
                              alt={artifact.alt}
                              className="h-full w-full object-contain transition duration-700 group-hover/thumb:scale-[1.04]"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 flex flex-col justify-between flex-1 bg-white">
                      <span className="text-xs font-bold text-navy truncate block w-full text-left">
                        {artifact.title}
                      </span>
                      <span className="text-[10px] text-ink/75 leading-normal mt-1 block text-left">
                        {artifact.caption}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function CaseArtifactTags({ tags, label }: { tags: string[]; label: string }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5" aria-label={label}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex max-w-full rounded-sm border border-navy/20 bg-navy/5 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-navy transition duration-300 hover:border-navy hover:bg-navy/10"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function CaseSnapshot({ caseStudy, labels }: { caseStudy: CaseStudy; labels: PortfolioContent["caseStudyLabels"] }) {
  const items = [
    { label: labels.problem, text: caseStudy.problem },
    { label: labels.role, text: caseStudy.role },
    { label: labels.delivered, text: caseStudy.delivered },
    { label: labels.whatItProves, text: caseStudy.impact },
  ];

  return (
    <dl className="case-snapshot-list mt-6 bg-navy/5 border border-navy/10 rounded-lg overflow-hidden">
      {items.map((item) => (
        <div key={item.label} className="case-snapshot-item border-b border-navy/10 last:border-b-0">
          <dt className="case-snapshot-label text-navy-accent font-bold">{item.label}</dt>
          <dd className="case-snapshot-text text-ink/85">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImagePreview({
  image,
  detailImage,
  labels,
  openArtifactLabel,
  onImageOpen,
  compact = false,
}: {
  image: AssetImage;
  detailImage?: AssetImage;
  labels: PortfolioContent["caseStudyLabels"];
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  compact?: boolean;
}) {
  return (
    <figure className="case-artifact-shell group bg-white border border-navy/15 rounded-xl p-3 shadow-minimal">
      <ArtifactWindowBar title={labels.artifactPreview} meta={labels.sanitized} />
      <button
        type="button"
        className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 animate-duration-150"
        aria-label={`${openArtifactLabel}: ${image.title}`}
        onClick={() => onImageOpen(image)}
        onPointerEnter={() => preloadImage(image.src)}
        onFocus={() => preloadImage(image.src)}
      >
        <span className={`case-visual-frame relative block overflow-hidden bg-[#f8fafc] w-full ${compact ? "h-[300px]" : "aspect-[16/10]"}`}>
          <img
            src={image.previewSrc ?? image.src}
            alt={image.alt}
            className="h-full w-full object-contain bg-[#f8fafc] transition duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          {detailImage ? (
            <span className="case-detail-preview-layer" aria-hidden="true">
              <img src={detailImage.previewSrc ?? detailImage.src} alt="" loading="lazy" decoding="async" />
            </span>
          ) : null}
          <span className="artifact-annotation">{image.caption ?? labels.sanitized}</span>
          <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
            {openArtifactLabel}
          </span>
        </span>
      </button>
      <figcaption className="mt-4 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <span className="text-sm font-semibold text-navy">{image.title}</span>
        {image.caption ? <span className="text-xs font-medium text-muted">{image.caption}</span> : null}
      </figcaption>
    </figure>
  );
}

function PermissionPreview({ labels }: { labels: PortfolioContent["caseStudyLabels"] }) {
  return (
    <div className="case-artifact-shell bg-white border border-navy/15 rounded-xl p-6">
      <ArtifactWindowBar title={labels.matrixTitle} meta={labels.matrixMeta} />
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="artifact-label">{labels.matrixTitle}</span>
        <span className="text-xs font-semibold text-muted">{labels.matrixMeta}</span>
      </div>
      <div className="grid grid-cols-[1.2fr_repeat(5,1fr)] gap-px bg-line text-[10px] font-semibold text-muted">
        {["Role", "Read", "Create", "Edit", "Approve", "Admin"].map((label) => (
          <span key={label} className="bg-cream px-2 py-3 text-navy">
            {label}
          </span>
        ))}
        {Array.from({ length: 48 }).map((_, cellIndex) => (
          <span
            key={cellIndex}
            className={`h-10 bg-card ${cellIndex % 6 === 0 ? "bg-cream" : ""} ${
              cellIndex % 8 === 0 || cellIndex % 11 === 0 ? "bg-sky/70" : ""
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{labels.internalPreview}</p>
    </div>
  );
}

function TimelinePreview({ labels, large = false }: { labels: PortfolioContent["caseStudyLabels"]; large?: boolean }) {
  const phases = ["Discovery", "Flow Mapping", "Mockup", "Review", "Dev Handoff", "QA"];

  return (
    <div className={`case-artifact-shell bg-white border border-navy/15 rounded-xl p-6 ${large ? "lg:min-h-[420px]" : ""}`}>
      <ArtifactWindowBar title={labels.artifactPreview} meta={labels.internalPreview} />
      <div className={`space-y-4 ${large ? "lg:pt-8" : ""}`}>
        {phases.map((phase, phaseIndex) => (
          <div key={phase} className="grid grid-cols-[minmax(88px,108px)_1fr] items-center gap-4 text-xs font-semibold text-navy">
            <span className="truncate text-muted">{phase}</span>
            <span className={`relative bg-cream ${large ? "h-10" : "h-7"}`}>
              <span
                className={`absolute top-1/2 -translate-y-1/2 bg-navy ${large ? "h-4" : "h-3"}`}
                style={{
                  left: `${Math.min(phaseIndex * 12, 66)}%`,
                  width: `${phaseIndex % 2 === 0 ? 30 : 24}%`,
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtifactWindowBar({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="artifact-window-bar mb-4">
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{title}</span>
      <span className="hidden min-w-0 truncate text-right text-[11px] font-semibold text-muted md:block">{meta}</span>
    </div>
  );
}

function DetailBlock({ children, emphasis = "low" }: { children: ReactNode; emphasis?: "high" | "medium" | "low" }) {
  const toneClass =
    emphasis === "high"
      ? "border-navy/20 border-l-navy bg-gradient-to-br from-white to-[#f4f7f5] shadow-minimal"
      : emphasis === "medium"
        ? "border-navy/10 border-l-navy/70 bg-gradient-to-br from-white to-[#faf8f2]"
        : "border-navy/10 border-l-navy/40 bg-navy/5";

  return <div className={`rounded-lg border border-l-4 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-navy ${toneClass}`}>{children}</div>;
}

function DetailList({ title, items, emphasis = "low", iconType }: { title: string; items: string[]; emphasis?: "high" | "medium" | "low"; iconType?: string }) {
  return (
    <DetailBlock emphasis={emphasis}>
      <p className="detail-label mb-3 flex items-center gap-1.5">
        {iconType && getBlockIcon(iconType)}
        {title}
      </p>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink/85 md:text-base md:leading-7">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </DetailBlock>
  );
}

function EmphasizedText({ text, className }: { text: string; className: string }) {
  const sentenceMatch = text.match(/^(.{12,130}?[.!?])\s+(.*)$/);

  if (sentenceMatch) {
    return (
      <p className={className}>
        <strong className="font-semibold text-navy">{sentenceMatch[1]}</strong> {sentenceMatch[2]}
      </p>
    );
  }

  const words = text.split(" ");

  if (words.length <= 8) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      <strong className="font-semibold text-navy">{words.slice(0, 6).join(" ")}</strong> {words.slice(6).join(" ")}
    </p>
  );
}

function Case1Visual({
  mainPreview,
  openArtifactLabel,
  onImageOpen,
  labels,
}: {
  mainPreview: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  labels: any;
}) {
  return (
    <div className="case-artifact-shell relative overflow-hidden bg-gradient-to-br from-[#071f16] to-[#080e24] rounded-xl border border-[#1d3f35]/30 p-3 md:p-4 flex items-center justify-center select-none group w-full">
      <div className="parity-grid-bg" />
      <div className="parity-glow" />
      
      <button
        type="button"
        className="relative z-10 w-full flex flex-col md:flex-row gap-5 items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${mainPreview.title}`}
        onClick={() => onImageOpen(mainPreview)}
        onPointerEnter={() => preloadImage(mainPreview.src)}
        onFocus={() => preloadImage(mainPreview.src)}
      >
        {/* Browser window */}
        <div className="w-full md:flex-[2.6] xl:flex-[2.9] bg-[#f8fafc] rounded-lg border border-line shadow-hover overflow-hidden flex flex-col transition duration-500 group-hover:-translate-y-1">
          <div className="h-7 bg-[#f8fafc] border-b border-line flex items-center justify-between px-3 select-none">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d56f5d]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#d7aa4a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#68a37d]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy">
              {labels.artifactPreview ?? "Engagement flow canvas"}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#f8fafc]">
            <img
              src={mainPreview.previewSrc ?? mainPreview.src}
              alt={mainPreview.alt}
              className="h-full w-full object-contain bg-[#f8fafc]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Spec hint floating card */}
        <div className="spec-hint shrink-0 md:w-[190px] shadow-hover transition duration-500 group-hover:-translate-y-1">
          <div className="spec-hint-kicker">Key Contributions</div>
          <div className="spec-hint-title">Trigger & State Validation</div>
          <div className="spec-hint-item mt-1">
            <div className="spec-dot" />
            <span>Event trigger routing logic</span>
          </div>
          <div className="spec-hint-item">
            <div className="spec-dot" />
            <span>Segment condition filters</span>
          </div>
          <div className="spec-hint-item">
            <div className="spec-dot" />
            <span>Failure path handling</span>
          </div>
          <div className="spec-hint-item">
            <div className="spec-dot" />
            <span>QA/UAT validation specs</span>
          </div>
        </div>

        {/* View work sample overlay inside browser card */}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
          {openArtifactLabel}
        </span>
      </button>

      {/* Badge label */}
      <div className="absolute bottom-4 right-4 bg-sky/90 border border-sky px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-[#080E24] shadow-sm pointer-events-none select-none z-20">
        Product Work Evidence
      </div>
    </div>
  );
}

function Case2Visual({
  mainPreview,
  openArtifactLabel,
  onImageOpen,
  labels,
}: {
  mainPreview: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  labels: any;
}) {
  const phases = [
    { label: "Discovery", left: "15%", width: "30%", status: "Done", type: "done" },
    { label: "Flow Mapping", left: "25%", width: "30%", status: "Done", type: "done" },
    { label: "Interface Mockups", left: "35%", width: "30%", status: "Done", type: "done" },
    { label: "Review", left: "50%", width: "20%", status: "Active", type: "progress" },
    { label: "Dev Handoff", left: "65%", width: "18%", status: "Planned", type: "scheduled" },
    { label: "QA / UAT", left: "80%", width: "18%", status: "Planned", type: "scheduled" },
  ];

  return (
    <div className="case-artifact-shell relative overflow-hidden bg-gradient-to-br from-[#080E24] to-[#14245F] rounded-xl border border-[#152752]/30 p-3 md:p-4 flex items-center justify-center select-none group w-full">
      <div className="parity-grid-bg" />
      <div className="parity-glow" />

      <button
        type="button"
        className="relative z-10 w-full flex items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${mainPreview.title}`}
        onClick={() => onImageOpen(mainPreview)}
        onPointerEnter={() => preloadImage(mainPreview.src)}
        onFocus={() => preloadImage(mainPreview.src)}
      >
        <div className="gantt-hint w-full max-w-full transition duration-500 group-hover:-translate-y-1">
          {phases.map((phase) => (
            <div key={phase.label} className="gantt-row">
              <span className="gantt-label !text-cream font-bold w-[120px] sm:w-[140px] shrink-0 text-right pr-2 select-none">{phase.label}</span>
              <div className="gantt-bar-track">
                <div
                  className={`gantt-bar-fill ${
                    phase.type === "done"
                      ? "bar-done"
                      : phase.type === "progress"
                      ? "bar-progress"
                      : "bar-scheduled"
                  }`}
                  style={{ left: phase.left, width: phase.width }}
                >
                  <span className="gantt-bar-text">{phase.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View work sample overlay inside browser card */}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
          {openArtifactLabel}
        </span>
      </button>

      {/* Badge label */}
      <div className="absolute bottom-4 right-4 bg-navy-accent border border-navy-accent px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-cream shadow-sm pointer-events-none select-none z-20">
        Process Evidence
      </div>
    </div>
  );
}

function Case3Visual({
  mainPreview,
  openArtifactLabel,
  onImageOpen,
  labels,
}: {
  mainPreview: AssetImage;
  openArtifactLabel: string;
  onImageOpen: (image: AssetImage) => void;
  labels: any;
}) {
  const headers = ["Permission", "Admin", "Manager", "Analyst", "Agent"];
  const rows = [
    { name: "Edit Event Config", cells: [true, false, false, false] },
    { name: "Approve Campaign", cells: [true, true, false, false] },
    { name: "Export Report", cells: [true, true, true, false] },
    { name: "Manage User Role", cells: [true, false, false, false] },
    { name: "View Activity Log", cells: [true, true, true, true] },
    { name: "Update Segment Rule", cells: [true, true, false, false] },
  ];

  return (
    <div className="case-artifact-shell relative overflow-hidden bg-gradient-to-br from-white to-[#f4f7f5] rounded-xl border border-[#1d3f35]/25 p-3 md:p-4 flex items-center justify-center select-none group w-full shadow-minimal">
      <div className="parity-grid-bg opacity-30" />
      <button
        type="button"
        className="relative z-10 w-full flex items-center justify-center text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-label={`${openArtifactLabel}: ${mainPreview.title}`}
        onClick={() => onImageOpen(mainPreview)}
        onPointerEnter={() => preloadImage(mainPreview.src)}
        onFocus={() => preloadImage(mainPreview.src)}
      >
        <div className="w-full max-w-full transition duration-500 group-hover:-translate-y-1 grid grid-cols-[115px_repeat(4,1fr)] sm:grid-cols-[135px_repeat(4,1fr)] gap-1 bg-white border border-navy/15 rounded-lg p-3 sm:p-4 shadow-sm text-navy">
          {headers.map((header) => (
            <div key={header} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-navy pb-2 border-b border-navy/15 text-center first:text-left">
              {header}
            </div>
          ))}

          {rows.map((row) => (
            <div key={row.name} className="contents">
              <div className="text-[9px] sm:text-xs font-semibold text-navy/90 py-1.5 border-b border-navy/5 flex items-center truncate">
                {row.name}
              </div>
              {row.cells.map((allowed, cellIdx) => (
                <div key={cellIdx} className="flex items-center justify-center py-1.5 border-b border-navy/5">
                  {allowed ? (
                    <div className="w-4 h-4 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#047857] text-[10px] font-bold select-none">✓</div>
                  ) : (
                    <div className="text-navy/30 text-xs font-semibold select-none">-</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* View work sample overlay inside browser card */}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 rounded border border-cream/70 bg-navy/90 px-3 py-2 text-center text-xs font-semibold text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-30">
          {openArtifactLabel}
        </span>
      </button>

      {/* Badge label */}
      <div className="absolute bottom-4 right-4 bg-navy text-cream border border-navy px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm pointer-events-none select-none z-20">
        System Logic Matrix
      </div>
    </div>
  );
}

export default CaseStudyCard;

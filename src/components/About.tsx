import { useState } from "react";
import type { PortfolioContent } from "../data/portfolio";

type AboutProps = {
  content: PortfolioContent["about"];
};

function About({ content }: AboutProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const showPortrait = Boolean(content.portrait && !portraitFailed);
  const pointTones = [
    "border-line bg-card",
    "border-sky/45 bg-sky/15",
    "border-navy/10 bg-beige/75",
  ];

  return (
    <section id="about" className="section-padding bg-cream" aria-labelledby="about-title">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-14">
          <div className="min-w-0">
            {showPortrait && content.portrait ? (
              <div>
                <figure className="overflow-hidden rounded-lg border border-line bg-card p-3">
                  <div className="aspect-[4/5] overflow-hidden rounded-md bg-beige">
                    <img
                      src={content.portrait.src}
                      alt={content.portrait.alt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                      onError={() => setPortraitFailed(true)}
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm font-semibold text-navy">
                    <span>{content.portrait.title}</span>
                    {content.portrait.caption ? <span className="text-xs text-muted">{content.portrait.caption}</span> : null}
                  </figcaption>
                </figure>
                <EducationBlock content={content} />
              </div>
            ) : (
              <ProfileFallback content={content} />
            )}
          </div>

          <div className="min-w-0">
            <p className="section-kicker text-navy">{content.eyebrow}</p>
            <h2
              id="about-title"
              className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.05] text-navy sm:text-[40px] md:text-[58px] lg:text-[68px]"
            >
              {content.title}
            </h2>
            <EmphasizedParagraph className="mt-7 max-w-3xl text-base leading-8 text-muted md:text-lg md:leading-9" text={content.body} />

            <div className="mt-12 grid gap-4">
              {content.points.map((point, index) => (
                <article
                  key={point.title}
                  className={`stagger-item grid gap-5 rounded-lg border p-5 md:grid-cols-[96px_1fr] md:p-6 ${pointTones[index % pointTones.length]}`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <p className="text-[40px] font-semibold leading-none text-navy/25 md:text-[58px]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-navy">{point.title}</h3>
                    <EmphasizedParagraph className="mt-3 max-w-2xl text-base leading-7 text-muted" text={point.description} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileFallback({ content }: AboutProps) {
  return (
    <aside className="relative overflow-hidden rounded-lg border border-line bg-card p-6 md:p-8" aria-label={content.abstractCard.eyebrow}>
      <p className="section-kicker text-navy">{content.abstractCard.eyebrow}</p>
      <div className="mt-7 grid grid-cols-4 gap-2" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className={`h-7 rounded border border-line ${index % 3 === 0 ? "bg-sky/55" : "bg-cream"}`} />
        ))}
      </div>
      <h3 className="mt-8 max-w-sm break-words text-[34px] font-semibold leading-[1.04] text-navy sm:text-[40px] md:text-[52px]">
        {content.abstractCard.title}
      </h3>
      <div className="mt-10 grid gap-2">
        {content.abstractCard.lines.map((line) => (
          <span key={line} className="border-t border-line pt-3 text-sm font-semibold text-muted">
            {line}
          </span>
        ))}
      </div>
      <EducationBlock content={content} />
    </aside>
  );
}

function EducationBlock({ content }: AboutProps) {
  return (
    <div className="mt-8 rounded-md border border-line bg-cream p-4">
      <p className="detail-label">{content.educationLabel}</p>
      <p className="mt-3 text-base font-semibold leading-6 text-navy">{content.education.school}</p>
      <p className="mt-3 text-sm font-medium text-ink">{content.education.degree}</p>
      <p className="mt-1 text-sm text-muted">{content.education.period}</p>
    </div>
  );
}

function EmphasizedParagraph({ text, className }: { text: string; className: string }) {
  const match = text.match(/^(.{12,140}?[.!?])\s+(.*)$/);

  if (!match) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      <strong className="font-semibold text-ink">{match[1]}</strong> {match[2]}
    </p>
  );
}

export default About;

import { useState } from "react";
import type { PortfolioContent } from "../data/portfolio";

type OrganizationsStripProps = {
  content: PortfolioContent["organizations"];
};

function OrganizationsStrip({ content }: OrganizationsStripProps) {
  return (
    <section className="section-organizations section-padding !pb-8 bg-cream text-ink border-b border-line md:!pb-10" aria-labelledby="organizations-title">
      <div className="container-wide">
        <div className="grid gap-7 border-t border-line pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <StripKicker>{content.eyebrow}</StripKicker>
          <div>
            <h2 id="organizations-title" className="text-[28px] font-semibold leading-[1.08] text-navy md:text-[40px]">
              {content.title}
            </h2>
            {content.description ? (
              <p className="mt-4 max-w-[1120px] text-base leading-7 text-muted md:text-lg">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="strip-marquee strip-marquee-left mt-8" aria-label={content.title}>
          <div className="strip-marquee-track">
            <OrganizationTiles items={content.items} />
            <OrganizationTiles items={content.items} duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}

function StripKicker({ children }: { children: string }) {
  return (
    <p className="section-kicker inline-flex items-center gap-2 text-navy">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-navy/15 bg-navy/5 text-navy" aria-hidden="true">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
        </svg>
      </span>
      {children}
    </p>
  );
}

function OrganizationTiles({ items, duplicate = false }: { items: PortfolioContent["organizations"]["items"]; duplicate?: boolean }) {
  return (
    <div className="strip-marquee-group" aria-hidden={duplicate}>
      {items.map((organization) => (
        <OrganizationCard key={`${duplicate ? "duplicate-" : ""}${organization.name}`} organization={organization} />
      ))}
    </div>
  );
}

function OrganizationCard({ organization }: { organization: PortfolioContent["organizations"]["items"][number] }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showLogo = Boolean(organization.logo && !imageFailed);

  return (
    <article className="organization-strip-item">
      <div className="flex h-14 items-center justify-center">
        {showLogo ? (
          <img
            src={organization.logo}
            alt=""
            className="max-h-11 max-w-[150px] object-contain"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-navy text-sm font-bold text-cream">
            {getFallbackMark(organization.name)}
          </span>
        )}
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-semibold leading-tight text-navy">{organization.name}</p>
        <p className="mt-1 text-xs leading-5 text-muted">{organization.context}</p>
      </div>
    </article>
  );
}

function getFallbackMark(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default OrganizationsStrip;

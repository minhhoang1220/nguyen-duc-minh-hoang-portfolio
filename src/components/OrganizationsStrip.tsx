import { useState } from "react";
import type { PortfolioContent } from "../data/portfolio";

type OrganizationsStripProps = {
  content: PortfolioContent["organizations"];
};

function OrganizationsStrip({ content }: OrganizationsStripProps) {
  return (
    <section className="section-organizations section-padding bg-cream text-ink border-b border-line" aria-labelledby="organizations-title">
      <div className="container-wide">
        <div className="grid gap-7 border-t border-line pt-8 lg:grid-cols-[180px_1fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="organizations-title" className="text-[28px] font-semibold leading-[1.08] text-navy md:text-[40px]">
              {content.title}
            </h2>
            {content.description ? (
              <p className="mt-4 max-w-4xl text-base leading-7 text-muted md:text-lg">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {content.items.map((organization) => (
            <OrganizationCard key={organization.name} organization={organization} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OrganizationCard({ organization }: { organization: PortfolioContent["organizations"]["items"][number] }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showLogo = Boolean(organization.logo && !imageFailed);

  return (
    <article className="organization-card flex min-h-[132px] flex-col justify-between rounded-lg border border-line bg-[#FCFBF8] p-4 shadow-minimal transition duration-300 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-hover">
      <div className="flex h-12 items-center">
        {showLogo ? (
          <img
            src={organization.logo}
            alt=""
            className="max-h-10 max-w-full object-contain"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="text-lg font-semibold leading-tight text-navy">{organization.name}</span>
        )}
      </div>
      <div className="mt-4 border-t border-line pt-3">
        <p className="text-sm font-semibold leading-tight text-navy">{organization.name}</p>
        <p className="mt-1 text-xs leading-5 text-muted">{organization.context}</p>
      </div>
    </article>
  );
}

export default OrganizationsStrip;

import type { PortfolioContent } from "../data/portfolio";

type ToolsStripProps = {
  content: PortfolioContent["tools"];
};

function ToolsStrip({ content }: ToolsStripProps) {
  return (
    <section className="section-tools bg-cream px-0 pb-12 text-ink md:pb-14 lg:pb-16" aria-labelledby="tools-title">
      <div className="container-wide">
        <div className="grid gap-6 border-t border-line pt-7 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <StripKicker>{content.eyebrow}</StripKicker>
          <div>
            <h2 id="tools-title" className="text-[28px] font-semibold leading-[1.08] text-navy md:text-[40px]">
              {content.title}
            </h2>
            {content.description ? (
              <p className="mt-4 max-w-[1120px] text-base leading-7 text-muted md:text-lg">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="strip-marquee strip-marquee-right mt-7" aria-label={content.title}>
          <div className="strip-marquee-track">
            <ToolTiles items={content.items} />
            <ToolTiles items={content.items} duplicate />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M7 4v16M17 4v16M4 17h16" />
        </svg>
      </span>
      {children}
    </p>
  );
}

function ToolTiles({ items, duplicate = false }: { items: string[]; duplicate?: boolean }) {
  return (
    <ul className="strip-marquee-group" aria-hidden={duplicate}>
      {items.map((tool) => (
        <li key={`${duplicate ? "duplicate-" : ""}${tool}`} className="tool-strip-item">
          <span className="tool-strip-icon" aria-hidden="true">
            {getToolIcon(tool)}
          </span>
          <span>{tool}</span>
        </li>
      ))}
    </ul>
  );
}

function getToolIcon(tool: string) {
  const iconClass = "h-4 w-4";

  if (tool.includes("Jira")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7zM4 4l3 3m10 10l3 3M20 4l-3 3M7 17l-3 3" />
      </svg>
    );
  }

  if (tool.includes("Confluence")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8c4-4 8 4 12 0M8 16c4-4 8 4 12 0" />
      </svg>
    );
  }

  if (tool.includes("Figma")) {
    return (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
        <circle cx="9" cy="6" r="3" />
        <circle cx="15" cy="6" r="3" />
        <circle cx="9" cy="12" r="3" />
        <circle cx="15" cy="12" r="3" />
        <circle cx="9" cy="18" r="3" />
      </svg>
    );
  }

  if (tool.includes("SQL")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3zm0 0v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
      </svg>
    );
  }

  if (tool.includes("Power BI")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 20V10m7 10V4m7 16v-7" />
      </svg>
    );
  }

  if (tool.includes("Draw")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h4v4H6zM14 14h4v4h-4zM10 8h4m2 2v4" />
      </svg>
    );
  }

  if (tool.includes("Python")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3M13 5l-2 14" />
      </svg>
    );
  }

  if (tool.includes("Messenger") || tool.includes("Zalo")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8.5 8.5 0 01-12.8 7.33L3 21l1.67-5.2A8.5 8.5 0 1121 12z" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v6a3 3 0 003 3h6a3 3 0 013 3v6M6 9h12M6 21h12" />
    </svg>
  );
}

export default ToolsStrip;

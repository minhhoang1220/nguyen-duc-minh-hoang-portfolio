type HeroProps = {
  personal: {
    name: string;
    shortRole: string;
    roleLine: string;
    tagline: string;
    intro: string;
    linkedin: string;
    cv: string;
  };
};

function Hero({ personal }: HeroProps) {
  return (
    <section id="home" className="section-padding bg-cream" aria-labelledby="hero-title">
      <div className="container-main grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy">{personal.name}</p>
          <p className="mb-5 max-w-2xl text-lg font-medium text-muted">{personal.roleLine}</p>
          <h1 id="hero-title" className="text-balance text-[40px] font-semibold leading-[1.05] text-navy md:text-6xl md:leading-[1.02] xl:text-[68px]">
            {personal.tagline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink">{personal.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#case-studies" aria-label="View featured case studies">
              View Case Studies
            </a>
            <a className="btn-secondary" href={personal.cv} aria-label="Download Nguyễn Đức Minh Hoàng CV">
              Download CV
            </a>
            <a className="btn-ghost" href={personal.linkedin} aria-label="Open LinkedIn profile">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px] border border-line bg-card p-5 md:p-8" aria-hidden="true">
          <div className="absolute left-5 top-5 h-24 w-24 border border-line bg-cream" />
          <div className="relative z-10 grid h-full gap-4">
            <div className="artifact-card ml-auto w-[86%]">
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <span className="artifact-label">Flow Diagram</span>
                <span className="h-2 w-16 bg-sky" />
              </div>
              <div className="flex items-center justify-between">
                <span className="flow-node">Need</span>
                <span className="flow-line" />
                <span className="flow-node bg-navy text-cream">Logic</span>
                <span className="flow-line" />
                <span className="flow-node">Handoff</span>
              </div>
            </div>

            <div className="artifact-card w-[78%]">
              <div className="mb-4 flex items-center justify-between">
                <span className="artifact-label">Permission Matrix</span>
                <span className="text-xs font-semibold text-navy">21 x ~400</span>
              </div>
              <div className="grid grid-cols-5 gap-px bg-line">
                {Array.from({ length: 25 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-7 bg-card ${index % 4 === 0 ? "bg-cream" : ""} ${index % 7 === 0 ? "bg-sky/70" : ""}`}
                  />
                ))}
              </div>
            </div>

            <div className="artifact-card ml-auto w-[72%]">
              <div className="mb-4 flex items-center justify-between">
                <span className="artifact-label">Figma Mockup</span>
                <span className="text-xs font-semibold text-navy">65+</span>
              </div>
              <div className="space-y-3">
                <span className="block h-9 border border-line bg-cream" />
                <span className="block h-16 border border-line bg-card" />
                <div className="grid grid-cols-3 gap-2">
                  <span className="h-8 bg-beige" />
                  <span className="h-8 bg-beige" />
                  <span className="h-8 bg-sky/60" />
                </div>
              </div>
            </div>

            <div className="artifact-card w-[84%]">
              <div className="mb-4 flex items-center justify-between">
                <span className="artifact-label">API / Webhook</span>
                <span className="h-3 w-3 bg-navy" />
              </div>
              <div className="space-y-3 font-mono text-xs text-muted">
                <p className="border-l-2 border-navy pl-3">event.trigger → permission.scope</p>
                <p className="border-l-2 border-sky pl-3">oauth.request → callback.state</p>
                <p className="border-l-2 border-line pl-3">message.channel → agent.action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import type { PortfolioContent } from "../data/portfolio";

type AboutProps = {
  content: PortfolioContent["about"];
};

function About({ content }: AboutProps) {
  const pointTones = [
    "border-navy/10 bg-[#FCFBF8] text-navy shadow-minimal",
    "border-navy/10 bg-[#F4F7FA] text-navy shadow-minimal",
    "border-navy/10 bg-[#FAF8F2] text-navy shadow-minimal",
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(180deg, #080E24 0%, #071f16 100%)' }} aria-labelledby="about-title">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <ProfileFallback content={content} />
          </div>

          <div className="min-w-0">
            <p className="section-kicker text-sky">{content.eyebrow}</p>
            <h2
              id="about-title"
              className="section-title max-w-none w-full text-cream !text-wrap"
            >
              {content.title}
            </h2>
            <EmphasizedParagraph className="mt-7 text-base leading-8 text-cream/80 md:text-lg md:leading-9 !text-wrap text-left max-w-none" text={content.body} darkBg />

            <div className="mt-9 grid gap-4">
              {content.points.map((point, index) => (
                <article
                  key={point.title}
                  className={`stagger-item grid gap-4 rounded-lg border p-5 md:grid-cols-[72px_1fr] ${pointTones[index % pointTones.length]}`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <p className="text-[34px] font-semibold leading-none text-navy/30 md:text-[44px]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-navy md:text-2xl">{point.title}</h3>
                    <EmphasizedParagraph className="mt-3 max-w-none text-base leading-7 text-ink/80" text={point.description} />
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
    <aside className="profile-placeholder-card" aria-label={content.profileCard.label}>
      <p className="section-kicker text-navy">{content.profileCard.label}</p>
      <div className="profile-placeholder-window" aria-hidden="true">
        <span>{content.profileCard.title}</span>
        <i />
        <i />
        <i />
      </div>
      <h3 className="mt-6 max-w-sm break-words text-[28px] font-semibold leading-[1.06] text-navy sm:text-[34px] md:text-[40px]">
        {content.abstractCard.title}
      </h3>
      <p className="mt-4 text-sm font-semibold leading-6 text-ink">{content.profileCard.subtitle}</p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-muted">{content.profileCard.placeholder}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {content.profileCard.chips.map((chip) => (
          <span key={chip} className="profile-chip">
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-7 grid gap-2">
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
      <div className="flex items-center justify-between gap-2 border-b border-line pb-2 mb-3">
        <p className="detail-label m-0">{content.educationLabel}</p>
        {content.education.logo && (
          <img src={content.education.logo} alt="" className="cred-logo-md shrink-0 object-contain" style={{ height: '32px' }} />
        )}
      </div>
      <p className="text-base font-semibold leading-6 text-navy">{content.education.school}</p>
      <p className="mt-2 text-sm font-medium text-ink">{content.education.degree}</p>
      <p className="mt-1 text-sm text-muted">{content.education.period}</p>
    </div>
  );
}

function EmphasizedParagraph({ text, className, darkBg = false }: { text: string; className: string; darkBg?: boolean }) {
  const match = text.match(/^(.{12,140}?[.!?])\s+(.*)$/);

  if (!match) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      <strong className={`font-semibold ${darkBg ? "text-sky" : "text-navy"}`}>{match[1]}</strong> {match[2]}
    </p>
  );
}

export default About;

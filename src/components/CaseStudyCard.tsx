import type { CaseStudy } from "../data/portfolio";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const rows = [
    ["Problem", caseStudy.problem],
    ["My Role", caseStudy.role],
    ["Delivered", caseStudy.delivered],
    ["Impact", caseStudy.impact],
  ];

  return (
    <article className="group flex h-full flex-col border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-minimal md:p-8">
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Case Study</p>
        <h3 className="text-2xl font-semibold leading-tight text-navy">{caseStudy.title}</h3>
      </div>

      <div className="space-y-5">
        {rows.map(([label, value]) => (
          <div key={label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{label}</p>
            <p className="text-sm leading-6 text-ink">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {caseStudy.skills.map((skill) => (
          <span key={skill} className="badge">
            {skill}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="mt-8 min-h-11 cursor-not-allowed border border-line bg-beige px-5 text-left text-sm font-semibold text-muted"
        disabled
        aria-label={`${caseStudy.title} case study page is planned`}
      >
        Read case study
      </button>
    </article>
  );
}

export default CaseStudyCard;

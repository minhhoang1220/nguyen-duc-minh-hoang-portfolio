import { useId, useState } from "react";
import type { CaseStudy } from "../data/portfolio";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = useId();
  const rows = [
    ["Context", caseStudy.context],
    ["Problem", caseStudy.problem],
    ["My Role", caseStudy.role],
    ["Product/System Impact", caseStudy.impact],
  ];

  return (
    <article className="card-hover flex h-full min-w-0 flex-col border border-line bg-card p-6 md:p-8">
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Case Study</p>
        <h3 className="text-2xl font-semibold leading-tight text-navy">{caseStudy.title}</h3>
      </div>

      <ArtifactPreview type={caseStudy.preview} />

      <div className="mt-7 space-y-5">
        {rows.map(([label, value]) => (
          <div key={label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{label}</p>
            <p className="text-sm leading-6 text-ink">{value}</p>
          </div>
        ))}
      </div>

      <div id={detailId} className={`${isExpanded ? "grid" : "hidden"} mt-6 gap-5 border-t border-line pt-6`}>
        <DetailList title="Process" items={caseStudy.process} />
        <DetailList title="Delivered Artifacts" items={caseStudy.artifacts} />
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">Delivered</p>
          <p className="text-sm leading-6 text-ink">{caseStudy.delivered}</p>
        </div>
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
        className="mt-8 min-h-11 border border-navy px-5 text-left text-sm font-semibold text-navy transition duration-300 hover:-translate-y-px hover:bg-navy hover:text-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
        aria-controls={detailId}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? "Hide Summary" : "View Summary"}
      </button>
    </article>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArtifactPreview({ type }: { type: CaseStudy["preview"] }) {
  if (type === "matrix") {
    return (
      <div className="artifact-preview">
        <div className="mb-4 flex items-center justify-between">
          <span className="artifact-label">Role-permission matrix</span>
          <span className="text-[11px] font-semibold text-muted">Sanitized</span>
        </div>
        <div className="grid grid-cols-[1.2fr_repeat(5,1fr)] gap-px bg-line text-[10px] font-semibold text-muted">
          {["Role", "Read", "Create", "Edit", "Approve", "Admin"].map((label) => (
            <span key={label} className="bg-cream px-2 py-2 text-navy">
              {label}
            </span>
          ))}
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className={`h-7 bg-card ${index % 5 === 0 ? "bg-cream" : ""} ${index % 7 === 0 ? "bg-sky/70" : ""}`}
            />
          ))}
        </div>
      </div>
    );
  }

  const nodes =
    type === "api"
      ? ["Channel", "OAuth", "Webhook", "Event", "Agent"]
      : ["Trigger", "Segment", "State", "Push", "Review"];

  return (
    <div className="artifact-preview">
      <div className="mb-4 flex items-center justify-between">
        <span className="artifact-label">{type === "api" ? "API / webhook flow" : "Automation flow"}</span>
        <span className="h-2 w-12 bg-sky" />
      </div>
      <div className="flex min-w-0 items-center overflow-hidden">
        {nodes.map((node, index) => (
          <div key={node} className="flex min-w-0 flex-1 items-center">
            <span className={`preview-node ${index === 2 ? "bg-navy text-cream" : ""}`}>{node}</span>
            {index < nodes.length - 1 ? <span className="h-px flex-1 bg-line" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <span className="h-8 border border-line bg-cream" />
        <span className="h-8 border border-line bg-card" />
        <span className="h-8 border border-line bg-sky/50" />
      </div>
    </div>
  );
}

export default CaseStudyCard;

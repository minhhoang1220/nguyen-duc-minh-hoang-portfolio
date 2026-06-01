import SectionHeader from "./SectionHeader";
import type { PortfolioContent } from "../data/portfolio";

type SkillsMatrixProps = {
  process: PortfolioContent["process"];
  approach: PortfolioContent["approach"];
  skillGroups: PortfolioContent["skillGroups"];
};

function SkillsMatrix({ process, approach, skillGroups }: SkillsMatrixProps) {
  return (
    <section id="skills" className="section-padding bg-cream" aria-labelledby="skills-title">
      <div className="container-wide">
        {/* Subsection 1: How I Work (Approach) */}
        <div>
          <SectionHeader eyebrow={approach.header.eyebrow} titleId="skills-title" title={approach.header.title} wide />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.items.map((item, index) => (
              <article key={item.title} className="flex flex-col gap-4 rounded-lg border border-line bg-card p-8 shadow-minimal transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                <span className="text-xs font-semibold text-muted tracking-wider">0{index + 1}</span>
                <h3 className="text-xl font-semibold leading-tight text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted mt-auto">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Subsection 2: Capability Groups (restructured skills) */}
        <div className="mt-20">
          <SectionHeader eyebrow={skillGroups.header.eyebrow} titleId="capability-title" title={skillGroups.header.title} wide />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.groups.map((group) => (
              <article key={group.category} className="flex flex-col gap-6 rounded-lg border border-line bg-card p-8 shadow-minimal transition-all duration-300 hover:shadow-hover">
                <h3 className="border-b border-line pb-3 text-lg font-semibold leading-tight text-navy">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-beige text-xs font-medium text-navy rounded-[3px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Subsection 3: Methodology (original 5-step process) */}
        <div className="mt-20">
          <SectionHeader eyebrow={process.header.eyebrow} titleId="process-title" title={process.header.title} wide />
          <div className="mt-10 border-y border-line">
            {process.rows.map((row) => (
              <article key={row.number} className="grid gap-5 border-b border-line py-8 last:border-b-0 md:grid-cols-[0.18fr_0.34fr_0.48fr] md:py-10">
                <p className="text-[40px] font-semibold leading-none text-navy md:text-[72px]">{row.number}</p>
                <h3 className="text-2xl font-semibold leading-tight text-navy md:text-3xl">{row.title}</h3>
                <p className="max-w-3xl text-base leading-8 text-muted md:text-lg">{row.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsMatrix;

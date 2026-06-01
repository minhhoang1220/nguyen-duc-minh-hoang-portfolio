import SectionHeader from "./SectionHeader";
import type { PortfolioContent } from "../data/portfolio";

type SkillsMatrixProps = {
  process: PortfolioContent["process"];
  approach: PortfolioContent["approach"];
  skillGroups: PortfolioContent["skillGroups"];
};

function SkillsMatrix({ process, approach, skillGroups }: SkillsMatrixProps) {
  const processNumberGradients = [
    "linear-gradient(135deg, #080E24 0%, #1B2D73 100%)",
    "linear-gradient(135deg, #14245F 0%, #273A86 100%)",
    "linear-gradient(135deg, #273A86 0%, #3F67BD 100%)",
    "linear-gradient(135deg, #2F55A8 0%, #6FA0F2 100%)",
    "linear-gradient(135deg, #3D6BC8 0%, #9DC4FF 100%)",
  ];

  return (
    <section id="skills" className="section-padding bg-cream" aria-labelledby="skills-title">
      <div className="container-wide">
        <div className="rounded-lg border border-line bg-cream">
          <div className="p-5 md:p-8 lg:p-10">
            <SectionHeader eyebrow={approach.header.eyebrow} titleId="skills-title" title={approach.header.title} wide />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approach.items.map((item, index) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-4 rounded-lg border border-line bg-card p-8 shadow-minimal transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
                >
                  <span className="detail-label">0{index + 1}</span>
                  <h3 className="text-xl font-semibold leading-tight text-navy">{item.title}</h3>
                  <p className="mt-auto text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-line bg-beige/45 p-5 md:p-8 lg:p-10">
          <SectionHeader eyebrow={skillGroups.header.eyebrow} titleId="capability-title" title={skillGroups.header.title} wide />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.groups.map((group) => (
              <article
                key={group.category}
                className="flex flex-col gap-6 rounded-lg border border-line bg-card p-8 shadow-minimal transition-all duration-300 hover:shadow-hover"
              >
                <h3 className="border-b border-line pb-3 text-lg font-semibold leading-tight text-navy">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-line bg-card p-5 md:p-8 lg:p-10">
          <SectionHeader eyebrow={process.header.eyebrow} titleId="process-title" title={process.header.title} wide />
          <div className="mt-10 border-y border-line">
            {process.rows.map((row, index) => (
              <article
                key={row.number}
                className="grid gap-5 border-b border-line py-8 last:border-b-0 md:grid-cols-[0.18fr_0.34fr_0.48fr] md:py-10"
              >
                <p
                  className="bg-clip-text text-[44px] font-semibold leading-none text-transparent md:text-[76px]"
                  style={{ backgroundImage: processNumberGradients[index % processNumberGradients.length] }}
                >
                  {row.number}
                </p>
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

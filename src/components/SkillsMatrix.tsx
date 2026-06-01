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
  const approachCardBackgrounds = [
    "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(252,250,244,0.94) 100%)",
    "linear-gradient(135deg, rgba(252,250,244,0.98) 0%, rgba(242,244,239,0.96) 100%)",
    "linear-gradient(135deg, rgba(250,248,242,0.96) 0%, rgba(225,236,249,0.82) 100%)",
    "linear-gradient(135deg, rgba(246,249,252,0.98) 0%, rgba(207,222,246,0.76) 100%)",
    "linear-gradient(135deg, rgba(242,247,253,0.98) 0%, rgba(194,216,249,0.74) 100%)",
  ];
  const thinkingRowClasses = [
    "thinking-row-01",
    "thinking-row-02",
    "thinking-row-03",
    "thinking-row-04",
    "thinking-row-05",
  ];

  return (
    <section id="skills" className="skills-narrative-band" aria-labelledby="skills-title">
      <div className="section-how-work section-padding">
        <div className="container-wide">
          <div className="skills-band-shell">
            <SectionHeader eyebrow={approach.header.eyebrow} titleId="skills-title" title={approach.header.title} wide />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approach.items.map((item, index) => (
                <article
                  key={item.title}
                  className="how-work-card group flex flex-col gap-4 rounded-lg border border-line p-8 shadow-minimal transition-all duration-500 hover:-translate-y-1 hover:border-navy/30 hover:shadow-hover"
                  style={{ background: approachCardBackgrounds[index % approachCardBackgrounds.length] }}
                >
                  <span className="sequence-badge" style={{ backgroundImage: processNumberGradients[index % processNumberGradients.length] }}>
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight text-navy">{item.title}</h3>
                  <p className="mt-auto text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-skills section-padding">
        <div className="container-wide">
          <div className="skills-band-shell">
          <SectionHeader eyebrow={skillGroups.header.eyebrow} titleId="capability-title" title={skillGroups.header.title} wide />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.groups.map((group) => (
              <article
                key={group.category}
                className="skill-group-card flex flex-col gap-6 rounded-lg border border-line bg-card p-8 shadow-minimal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover"
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
        </div>
      </div>

      <div className="section-how-think section-padding">
        <div className="container-wide">
          <div className="skills-band-shell">
          <SectionHeader eyebrow={process.header.eyebrow} titleId="process-title" title={process.header.title} wide />
          <div className="mt-10 grid gap-4">
            {process.rows.map((row, index) => (
              <article
                key={row.number}
                className={`thinking-row ${thinkingRowClasses[index % thinkingRowClasses.length]}`}
                style={{ transitionDelay: `${index * 70}ms` }}
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
      </div>
    </section>
  );
}

export default SkillsMatrix;

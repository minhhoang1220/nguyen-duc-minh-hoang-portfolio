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
  const thinkingRowBackgrounds = [
    "linear-gradient(135deg, rgba(13, 22, 58, 0.75) 0%, rgba(8, 14, 36, 0.85) 100%)",
    "linear-gradient(135deg, rgba(20, 36, 95, 0.75) 0%, rgba(8, 14, 36, 0.85) 100%)",
    "linear-gradient(135deg, rgba(39, 58, 134, 0.65) 0%, rgba(8, 14, 36, 0.85) 100%)",
    "linear-gradient(135deg, rgba(47, 85, 168, 0.55) 0%, rgba(8, 14, 36, 0.85) 100%)",
    "linear-gradient(135deg, rgba(61, 107, 200, 0.45) 0%, rgba(8, 14, 36, 0.85) 100%)",
  ];

  return (
    <section id="mindset" className="section-full bg-gradient-to-b from-[#080E24] to-[#0a0f1e] text-cream border-y border-cream/10" aria-labelledby="skills-title">
      <div className="section-how-work section-padding">
        <div className="container-wide">
          <div className="skills-band-shell section-panel--how-work">
            <SectionHeader eyebrow={approach.header.eyebrow} titleId="skills-title" title={approach.header.title} wide inverse />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approach.items.map((item, index) => (
                <article
                  key={item.title}
                  className="stagger-item how-work-card group flex flex-col gap-4 rounded-lg border border-cream/10 bg-black/20 p-8 shadow-minimal transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:bg-black/35 hover:shadow-hover"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span className="sequence-badge" style={{ backgroundImage: processNumberGradients[index % processNumberGradients.length] }}>
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight text-cream">{item.title}</h3>
                  <p className="mt-auto text-sm leading-relaxed text-cream/80">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-skills section-padding border-t border-cream/10">
        <div className="container-wide">
          <div className="skills-band-shell section-panel--skills">
            <SectionHeader eyebrow={skillGroups.header.eyebrow} titleId="capability-title" title={skillGroups.header.title} wide inverse />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.groups.map((group, index) => (
                <article
                  key={group.category}
                  className="stagger-item skill-group-card flex flex-col gap-6 rounded-lg border border-cream/10 p-8 shadow-minimal transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-hover"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <h3 className="border-b border-cream/10 pb-3 text-lg font-semibold leading-tight text-cream">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="inline-flex w-fit max-w-full items-center rounded border border-cream/10 bg-cream/10 px-3 py-1.5 text-xs font-semibold leading-5 text-cream hover:border-sky/40 hover:bg-cream/15 transition duration-300">
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

      <div className="section-how-think section-padding border-t border-cream/10">
        <div className="container-wide">
          <div className="skills-band-shell section-panel--how-think">
            <SectionHeader eyebrow={process.header.eyebrow} titleId="process-title" title={process.header.title} wide inverse />
            <div className="mt-10 grid gap-4">
              {process.rows.map((row, index) => (
                <article
                  key={row.number}
                  className="thinking-row border border-cream/10 p-6 rounded-lg shadow-minimal hover:border-sky/40 hover:-translate-y-0.5 transition duration-300"
                  style={{
                    backgroundImage: thinkingRowBackgrounds[index % thinkingRowBackgrounds.length],
                    transitionDelay: `${index * 70}ms`
                  }}
                >
                  <p
                    className="bg-clip-text text-[44px] font-semibold leading-none text-transparent md:text-[76px]"
                    style={{ backgroundImage: processNumberGradients[index % processNumberGradients.length] }}
                  >
                    {row.number}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-cream md:text-3xl">{row.title}</h3>
                  <p className="max-w-3xl text-base leading-8 text-cream/80 md:text-lg">{row.description}</p>
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

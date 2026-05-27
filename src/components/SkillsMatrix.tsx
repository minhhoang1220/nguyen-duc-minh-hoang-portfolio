import SectionHeader from "./SectionHeader";
import type { PortfolioContent } from "../data/portfolio";

type SkillsMatrixProps = {
  content: PortfolioContent["skillsMatrix"];
};

function SkillsMatrix({ content }: SkillsMatrixProps) {
  return (
    <section id="skills" className="section-padding bg-card" aria-labelledby="skills-title">
      <div className="container-main">
        <SectionHeader
          eyebrow={content.header.eyebrow}
          titleId="skills-title"
          title={content.header.title}
          description={content.header.description}
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {content.groups.map((group) => (
            <article key={group.title} className="card-hover border border-line bg-cream p-6">
              <h3 className="mb-5 text-xl font-semibold text-navy">{group.title}</h3>
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
    </section>
  );
}

export default SkillsMatrix;

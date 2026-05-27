import SectionHeader from "./SectionHeader";
import type { SkillGroup } from "../data/portfolio";

type SkillsMatrixProps = {
  groups: SkillGroup[];
};

function SkillsMatrix({ groups }: SkillsMatrixProps) {
  return (
    <section id="skills" className="section-padding bg-card" aria-labelledby="skills-title">
      <div className="container-main">
        <SectionHeader
          eyebrow="Skills Matrix"
          titleId="skills-title"
          title="A product-system skill stack, not a pure data or software engineering profile."
          description="The matrix connects BA fundamentals with product flow, technical understanding, coordination, and game/product direction."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {groups.map((group) => (
            <article key={group.title} className="border border-line bg-card p-6">
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

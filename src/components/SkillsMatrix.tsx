import SectionHeader from "./SectionHeader";
import type { PortfolioContent } from "../data/portfolio";

type SkillsMatrixProps = {
  content: PortfolioContent["process"];
};

function SkillsMatrix({ content }: SkillsMatrixProps) {
  return (
    <section id="skills" className="section-padding bg-cream" aria-labelledby="skills-title">
      <div className="container-wide">
        <SectionHeader eyebrow={content.header.eyebrow} titleId="skills-title" title={content.header.title} wide />

        <div className="mt-14 border-y border-line">
          {content.rows.map((row) => (
            <article key={row.number} className="grid gap-5 border-b border-line py-8 last:border-b-0 md:grid-cols-[0.18fr_0.34fr_0.48fr] md:py-10">
              <p className="text-[46px] font-semibold leading-none text-navy md:text-[72px]">{row.number}</p>
              <h3 className="text-2xl font-semibold leading-tight text-navy md:text-3xl">{row.title}</h3>
              <p className="max-w-3xl text-base leading-8 text-muted md:text-lg">{row.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsMatrix;

import type { PortfolioContent } from "../data/portfolio";

type AboutProps = {
  content: PortfolioContent["about"];
};

function About({ content }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-card" aria-labelledby="about-title">
      <div className="container-main grid gap-10 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy">{content.eyebrow}</p>
          <h2 id="about-title" className="text-balance text-3xl font-semibold leading-tight text-navy md:text-[40px]">
            {content.title}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-ink">
            <p>{content.primary}</p>
            <p>{content.secondary}</p>
          </div>
        </div>

        <aside className="border border-line bg-cream p-6 md:p-8" aria-label={content.educationLabel}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy">{content.educationLabel}</p>
          <h3 className="text-2xl font-semibold leading-tight text-navy">{content.education.school}</h3>
          <p className="mt-5 text-base font-medium text-ink">{content.education.degree}</p>
          <p className="mt-2 text-base text-muted">{content.education.period}</p>
        </aside>
      </div>
    </section>
  );
}

export default About;

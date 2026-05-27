type AboutProps = {
  copy: {
    primary: string;
    secondary: string;
  };
  education: {
    school: string;
    degree: string;
    period: string;
  };
};

function About({ copy, education }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-card" aria-labelledby="about-title">
      <div className="container-main grid gap-10 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy">About / Working Style</p>
          <h2 id="about-title" className="text-balance text-3xl font-semibold leading-tight text-navy md:text-[40px]">
            Turning unclear ideas into structured artifacts teams can use.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-ink">
            <p>{copy.primary}</p>
            <p>{copy.secondary}</p>
          </div>
        </div>

        <aside className="border border-line bg-cream p-6 md:p-8" aria-label="Education">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy">Education</p>
          <h3 className="text-2xl font-semibold leading-tight text-navy">{education.school}</h3>
          <p className="mt-5 text-base font-medium text-ink">{education.degree}</p>
          <p className="mt-2 text-base text-muted">{education.period}</p>
        </aside>
      </div>
    </section>
  );
}

export default About;

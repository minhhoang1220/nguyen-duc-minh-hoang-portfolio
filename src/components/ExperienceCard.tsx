import type { Experience } from "../data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
};

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="border border-line bg-cream p-6 md:p-8">
      <div className="mb-6 border-b border-line pb-6">
        <p className="text-sm font-semibold text-navy">{experience.period}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-navy">{experience.company}</h3>
        <p className="mt-2 text-base font-medium text-ink">{experience.role}</p>
        <p className="mt-4 text-sm leading-6 text-muted">{experience.context}</p>
      </div>
      <ul className="space-y-4">
        {experience.evidence.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
            <span className="mt-2 h-2 w-2 shrink-0 bg-navy" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  titleId?: string;
};

function SectionHeader({ eyebrow, title, description, inverse = false, titleId }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.08em] ${inverse ? "text-sky" : "text-navy"}`}>
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`text-balance text-3xl font-semibold leading-tight md:text-[40px] ${inverse ? "text-cream" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${inverse ? "text-cream/80" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeader;

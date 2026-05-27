type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  titleId?: string;
};

function SectionHeader({ eyebrow, title, description, inverse = false, titleId }: SectionHeaderProps) {
  return (
    <div className="max-w-4xl">
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.14em] ${inverse ? "text-sky" : "text-navy"}`}>
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`text-balance text-[34px] font-semibold leading-[1.08] md:text-[48px] ${inverse ? "text-cream" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 max-w-3xl text-base leading-8 md:text-lg ${inverse ? "text-cream/80" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;

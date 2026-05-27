type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  titleId?: string;
  wide?: boolean;
};

function SectionHeader({ eyebrow, title, description, inverse = false, titleId, wide = false }: SectionHeaderProps) {
  return (
    <div className={wide ? "max-w-6xl" : "max-w-4xl"}>
      <p className={`section-kicker ${inverse ? "text-sky" : "text-navy"}`}>
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`text-balance text-[38px] font-semibold leading-[1.03] md:text-[64px] lg:text-[76px] ${
          inverse ? "text-cream" : "text-navy"
        }`}
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

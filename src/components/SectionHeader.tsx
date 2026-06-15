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
    <div className={wide ? "max-w-none w-full" : "max-w-5xl"}>
      <p className={`section-kicker ${inverse ? "text-sky" : "text-navy"}`}>
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`section-title ${
          inverse ? "text-cream" : "text-navy"
        } !text-wrap`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 ${wide ? "max-w-[1180px]" : "max-w-3xl"} text-base leading-8 md:text-lg ${inverse ? "text-cream/80" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;

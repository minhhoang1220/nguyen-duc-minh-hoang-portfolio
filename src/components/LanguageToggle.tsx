import type { Language } from "../data/portfolio";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
  ariaLabel: string;
};

const options: Language[] = ["en", "vi"];

function LanguageToggle({ language, onChange, ariaLabel }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex h-10 items-center rounded-md border border-navy bg-card text-xs font-semibold uppercase text-navy"
      aria-label={ariaLabel}
      role="group"
    >
      {options.map((option, index) => {
        const isActive = option === language;

        return (
          <button
            key={option}
            type="button"
            className={`h-full px-3 transition duration-200 first:rounded-l-[5px] last:rounded-r-[5px] focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ${
              isActive ? "bg-navy text-cream" : "bg-card text-navy hover:bg-cream"
            } ${index > 0 ? "border-l border-navy" : ""}`}
            aria-pressed={isActive}
            onClick={() => onChange(option)}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageToggle;

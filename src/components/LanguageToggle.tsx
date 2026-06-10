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
      className="inline-flex h-10 items-center rounded-md border border-cream/20 bg-black/30 text-xs font-semibold uppercase text-cream/90"
      aria-label={ariaLabel}
      role="group"
    >
      {options.map((option, index) => {
        const isActive = option === language;

        return (
          <button
            key={option}
            type="button"
            className={`h-full px-3 transition duration-200 first:rounded-l-[5px] last:rounded-r-[5px] focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-[#080e24] ${
              isActive ? "bg-[#1b2d73] text-cream" : "bg-transparent text-cream/70 hover:bg-cream/10 hover:text-cream"
            } ${index > 0 ? "border-l border-cream/20" : ""}`}
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

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
      className="inline-flex h-9 items-center rounded-md border border-navy/15 bg-white p-0.5 text-xs font-bold uppercase text-[#080E24]"
      aria-label={ariaLabel}
      role="group"
    >
      {options.map((option) => {
        const isActive = option === language;

        return (
          <button
            key={option}
            type="button"
            className={`h-full px-3 transition-colors duration-150 rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
              isActive ? "bg-[#080E24] text-white" : "bg-white text-[#080E24]/65 hover:bg-[#080E24]/5 hover:text-[#080E24]"
            }`}
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

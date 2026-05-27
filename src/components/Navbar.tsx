import { useState } from "react";
import type { Language, NavItem } from "../data/portfolio";
import LanguageToggle from "./LanguageToggle";

type NavbarProps = {
  items: NavItem[];
  language: Language;
  labels: {
    brandAria: string;
    navAria: string;
    mobileNavAria: string;
    menuAria: string;
    switchLanguageAria: string;
  };
  onLanguageChange: (language: Language) => void;
};

function Navbar({ items, language, labels, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/95 backdrop-blur">
      <nav className="container-main flex min-h-[72px] items-center justify-between" aria-label={labels.navAria}>
        <a
          href="#home"
          className="text-base font-semibold text-navy transition-colors hover:text-navy-accent focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
          aria-label={labels.brandAria}
        >
          NDMH
        </a>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle language={language} onChange={onLanguageChange} ariaLabel={labels.switchLanguageAria} />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line text-navy transition-colors hover:border-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
            aria-label={labels.menuAria}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span aria-hidden="true" className="relative h-4 w-5">
              <span className="absolute left-0 top-0 h-0.5 w-5 bg-navy" />
              <span className="absolute left-0 top-[7px] h-0.5 w-5 bg-navy" />
              <span className="absolute bottom-0 left-0 h-0.5 w-5 bg-navy" />
            </span>
          </button>
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-navy transition-colors hover:text-navy-accent focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle language={language} onChange={onLanguageChange} ariaLabel={labels.switchLanguageAria} />
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-line bg-navy xl:hidden">
          <ul className="container-main py-3" aria-label={labels.mobileNavAria}>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block border-b border-white/10 py-4 text-base font-medium text-cream transition-colors hover:text-sky focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;

import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-32% 0px -56% 0px", threshold: [0.12, 0.32, 0.56] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className={`nav-shell ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="container-wide flex min-h-[72px] items-center justify-between" aria-label={labels.navAria}>
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
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line text-navy transition-colors hover:border-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
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
                  className={`nav-link ${activeHref === item.href ? "is-active" : ""}`}
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
          <ul className="container-wide py-3" aria-label={labels.mobileNavAria}>
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

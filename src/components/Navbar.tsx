import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
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
  const isOpenRef = useRef(false);
  const activeLockRef = useRef<{ href: string; expiresAt: number } | null>(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionId = useCallback((href: string) => href.replace("#", ""), []);

  const getHeaderOffset = useCallback(() => {
    const header = document.querySelector<HTMLElement>(".nav-shell");
    const revealBuffer = window.innerWidth < 768 ? 84 : 104;
    return (header?.getBoundingClientRect().height ?? 72) + revealBuffer;
  }, []);

  const getActiveHrefFromScroll = useCallback(() => {
    const sectionTargets = items
      .map((item) => {
        const element = document.getElementById(getSectionId(item.href));
        return element ? { href: item.href, top: element.getBoundingClientRect().top + window.scrollY } : null;
      })
      .filter((target): target is { href: string; top: number } => Boolean(target))
      .sort((a, b) => a.top - b.top);

    if (sectionTargets.length === 0) {
      return items[0]?.href ?? "#home";
    }

    if (window.scrollY <= 2) {
      return sectionTargets[0].href;
    }

    const documentElement = document.documentElement;
    const isNearPageEnd = window.innerHeight + window.scrollY >= documentElement.scrollHeight - 4;

    if (isNearPageEnd) {
      return sectionTargets[sectionTargets.length - 1].href;
    }

    const activeLine = window.scrollY + getHeaderOffset() + Math.round(window.innerHeight * 0.42);
    let currentHref = sectionTargets[0].href;

    for (const target of sectionTargets) {
      if (target.top <= activeLine) {
        currentHref = target.href;
      } else {
        break;
      }
    }

    return currentHref;
  }, [getHeaderOffset, getSectionId, items]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(getSectionId(item.href)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    let frame = 0;

    const updateActiveHref = () => {
      frame = 0;

      if (isOpenRef.current) {
        return;
      }

      const lockedTarget = activeLockRef.current;
      if (lockedTarget) {
        const targetSection = document.getElementById(getSectionId(lockedTarget.href));
        const targetReached = targetSection
          ? Math.abs(targetSection.getBoundingClientRect().top - getHeaderOffset()) < 20
          : true;

        if (!targetReached && performance.now() < lockedTarget.expiresAt) {
          return;
        }

        activeLockRef.current = null;
      }

      setActiveHref(getActiveHrefFromScroll());
    };

    const requestActiveUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveHref);
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(requestActiveUpdate, {
            rootMargin: `-${getHeaderOffset()}px 0px -62% 0px`,
            threshold: 0,
          })
        : null;

    observer?.observe(document.body);
    sections.forEach((section) => observer?.observe(section));
    requestActiveUpdate();
    const initialUpdateTimer = window.setTimeout(requestActiveUpdate, 120);
    const settledUpdateTimer = window.setTimeout(requestActiveUpdate, 650);

    window.addEventListener("scroll", requestActiveUpdate, { passive: true });
    window.addEventListener("resize", requestActiveUpdate);
    window.addEventListener("hashchange", requestActiveUpdate);

    return () => {
      observer?.disconnect();
      window.clearTimeout(initialUpdateTimer);
      window.clearTimeout(settledUpdateTimer);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestActiveUpdate);
      window.removeEventListener("resize", requestActiveUpdate);
      window.removeEventListener("hashchange", requestActiveUpdate);
    };
  }, [getActiveHrefFromScroll, getHeaderOffset, getSectionId, items]);

  const handleMenuToggle = useCallback(() => {
    const next = !isOpenRef.current;
    isOpenRef.current = next;
    setIsOpen(next);
  }, []);

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const section = document.getElementById(getSectionId(href));

      if (!section) {
        isOpenRef.current = false;
        setIsOpen(false);
        return;
      }

      event.preventDefault();

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targetTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY - getHeaderOffset());

      activeLockRef.current = { href, expiresAt: performance.now() + 1600 };
      setActiveHref(href);
      isOpenRef.current = false;
      setIsOpen(false);
      window.history.pushState(null, "", href);
      window.scrollTo({ top: targetTop, behavior: reduceMotion ? "auto" : "smooth" });
    },
    [getHeaderOffset, getSectionId],
  );

  return (
    <header className={`nav-shell ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="container-wide flex min-h-[72px] items-center justify-between" aria-label={labels.navAria}>
        <a
          href="#home"
          className="text-base font-semibold text-navy transition-colors hover:text-navy-accent focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
          aria-label={labels.brandAria}
          aria-current={activeHref === "#home" ? "location" : undefined}
          onClick={(event) => handleNavClick(event, "#home")}
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
            onClick={handleMenuToggle}
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
                  aria-current={activeHref === item.href ? "location" : undefined}
                  onClick={(event) => handleNavClick(event, item.href)}
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
        <div id="mobile-navigation" className="absolute inset-x-0 top-full border-t border-line bg-navy shadow-modal xl:hidden">
          <ul className="container-wide py-3" aria-label={labels.mobileNavAria}>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeHref === item.href ? "is-active" : ""}`}
                  aria-current={activeHref === item.href ? "location" : undefined}
                  onClick={(event) => handleNavClick(event, item.href)}
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

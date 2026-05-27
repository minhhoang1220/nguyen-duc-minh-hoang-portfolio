import { useState } from "react";
import type { NavItem } from "../data/portfolio";

type NavbarProps = {
  items: NavItem[];
};

function Navbar({ items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/95 backdrop-blur">
      <nav className="container-main flex min-h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a
          href="#home"
          className="text-base font-semibold text-navy transition-colors hover:text-navy-accent focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4"
          aria-label="Go to home section"
        >
          NDMH
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line text-navy transition-colors hover:border-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 lg:hidden"
          aria-label="Toggle navigation menu"
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

        <ul className="hidden items-center gap-1 lg:flex">
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
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-line bg-navy lg:hidden">
          <ul className="container-main py-3" aria-label="Mobile navigation">
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

import type { PortfolioContent } from "../data/portfolio";

type FooterProps = {
  personal: PortfolioContent["personal"];
  footer: PortfolioContent["footer"];
};

function Footer({ personal, footer }: FooterProps) {
  return (
    <footer className="bg-[#060a18] py-10 text-cream">
      <div className="container-wide grid gap-8 text-sm font-medium lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <div>
          <p className="text-lg font-semibold">{personal.name}</p>
          <p className="mt-2 max-w-xl text-cream/85">{personal.shortRole}</p>
          <p className="mt-4 text-sm font-semibold text-sky">{footer.currentFocus}</p>
        </div>

        <div className="grid gap-5 lg:justify-items-end lg:text-right">
          <nav className="footer-links" aria-label={footer.linksLabel}>
            <a href={`mailto:${personal.email}`}>Email</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={personal.cv}>Download CV</a>
          </nav>
          <div className="flex max-w-xl flex-col gap-2 text-cream/75">
          <p>{footer.location}</p>
          <p>{footer.techStack}</p>
          <p className="text-xs leading-5 text-cream/55">{footer.vibeNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

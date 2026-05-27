import type { PortfolioContent } from "../data/portfolio";

type FooterProps = {
  personal: PortfolioContent["personal"];
  footer: PortfolioContent["footer"];
};

function Footer({ personal, footer }: FooterProps) {
  return (
    <footer className="bg-navy-night py-10 text-cream">
      <div className="container-main flex flex-col gap-6 text-sm font-medium md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold">{personal.name}</p>
          <p className="mt-1 text-cream/70">{personal.shortRole}</p>
        </div>
        <div className="flex max-w-xl flex-col gap-2 text-cream/70 md:items-end md:text-right">
          <p>{footer.location}</p>
          <p>{footer.techStack}</p>
          <p className="text-xs leading-5 text-cream/55">{footer.vibeNote}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import type { PortfolioContent } from "../data/portfolio";
import CvLink from "./CvLink";

type ContactProps = {
  personal: PortfolioContent["personal"];
  content: PortfolioContent["contact"];
  cvFallback: string;
  linkedinAria: string;
  cvDownloadAria: string;
};

function Contact({ personal, content, cvFallback, linkedinAria, cvDownloadAria }: ContactProps) {
  return (
    <section id="contact" className="section-padding bg-navy text-cream" aria-labelledby="contact-title">
      <div className="container-main">
        <div className="grid min-w-0 gap-10 border border-cream/20 p-5 md:p-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-sky">{content.eyebrow}</p>
            <h2 id="contact-title" className="text-balance text-[36px] font-semibold leading-[1.08] text-cream md:text-[56px]">
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/80 md:text-lg">{content.description}</p>
          </div>

          <div className="min-w-0 flex flex-col justify-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky">{content.emailLabel}</p>
            <a
              className="inline-flex min-h-12 min-w-0 items-center justify-center break-all border-2 border-cream bg-cream px-4 py-3 text-sm font-medium text-navy transition duration-300 hover:-translate-y-px hover:bg-sky focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy sm:px-6 sm:text-base"
              href={`mailto:${personal.email}`}
              aria-label={content.emailLabel}
            >
              {personal.email}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border-2 border-cream bg-transparent px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:bg-cream hover:text-navy focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy"
              href={personal.linkedin}
              aria-label={linkedinAria}
              target="_blank"
              rel="noreferrer"
            >
              {content.linkedinLabel}
            </a>
            <CvLink
              className="inline-flex min-h-12 w-full items-center justify-center border border-cream/35 bg-transparent px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:border-cream hover:bg-navy-accent focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy"
              href={personal.cv}
              email={personal.email}
              ariaLabel={cvDownloadAria}
              fallbackMessage={cvFallback}
            >
              {content.cvLabel}
            </CvLink>
            <p className="pt-3 text-sm font-medium text-cream/70">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

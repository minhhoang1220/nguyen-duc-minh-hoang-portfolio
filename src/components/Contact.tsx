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
    <section id="contact" className="bg-gradient-to-b from-[#080E24] to-[#0a0f1e] section-padding text-cream" aria-labelledby="contact-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-cream/15 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-sky">{content.eyebrow}</p>
          <div>
            <h2 id="contact-title" className="section-title max-w-5xl text-cream">
              {content.title}
            </h2>

            <a
              className="mt-9 inline-flex max-w-full border-b border-sky pb-3 text-[28px] font-semibold leading-none text-cream transition duration-300 hover:-translate-y-1 hover:text-sky focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-[#080E24] md:text-[44px]"
              href={`mailto:${personal.email}`}
              aria-label={content.emailLabel}
            >
              {content.emailLabel}
            </a>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-cream/30 bg-transparent px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:border-sky hover:text-sky focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-[#080E24]"
                href={personal.linkedin}
                aria-label={linkedinAria}
                target="_blank"
                rel="noreferrer"
              >
                {content.linkedinLabel}
              </a>
              <CvLink
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/20 bg-cream/10 px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:border-sky hover:bg-cream/15 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-[#080E24]"
                href={personal.cv}
                email={personal.email}
                ariaLabel={cvDownloadAria}
                fallbackMessage={cvFallback}
              >
                {content.cvLabel}
              </CvLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

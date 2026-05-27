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
      <div className="container-wide">
        <div className="grid gap-8 border-t border-cream/25 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-sky">{content.eyebrow}</p>
          <div>
            <h2 id="contact-title" className="max-w-5xl text-balance text-[42px] font-semibold leading-[1.03] text-cream md:text-[74px] lg:text-[92px]">
              {content.title}
            </h2>

            <a
              className="mt-12 inline-flex max-w-full break-all border-b border-sky pb-4 text-[42px] font-semibold leading-none text-sky transition duration-300 hover:-translate-y-1 hover:text-cream focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy md:text-[76px]"
              href={`mailto:${personal.email}`}
              aria-label={content.emailLabel}
            >
              {content.emailLabel}
            </a>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:border-cream hover:bg-cream hover:text-navy focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy"
                href={personal.linkedin}
                aria-label={linkedinAria}
                target="_blank"
                rel="noreferrer"
              >
                {content.linkedinLabel}
              </a>
              <CvLink
                className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:border-cream hover:bg-cream hover:text-navy focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy"
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

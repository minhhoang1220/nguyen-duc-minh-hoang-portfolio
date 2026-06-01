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
    <section id="contact" className="section-contact section-padding text-ink" aria-labelledby="contact-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-navy">{content.eyebrow}</p>
          <div>
            <h2 id="contact-title" className="max-w-5xl text-balance text-[34px] font-semibold leading-[1.06] text-navy md:text-[56px] lg:text-[68px]">
              {content.title}
            </h2>

            <a
              className="mt-10 inline-flex max-w-full border-b border-navy pb-3 text-[30px] font-semibold leading-none text-navy transition duration-300 hover:-translate-y-1 hover:text-navy-accent focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-4 md:text-[52px]"
              href={`mailto:${personal.email}`}
              aria-label={content.emailLabel}
            >
              {content.emailLabel}
            </a>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="btn-secondary"
                href={personal.linkedin}
                aria-label={linkedinAria}
                target="_blank"
                rel="noreferrer"
              >
                {content.linkedinLabel}
              </a>
              <CvLink
                className="btn-ghost"
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

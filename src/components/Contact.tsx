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

            {/* Social/Contact block row */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 min-w-[140px] items-center gap-3 rounded-lg border border-cream/15 bg-cream/5 px-4 py-3 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:border-sky/40 hover:bg-cream/10"
              >
                <svg className="h-5 w-5 fill-current text-sky shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-cream/55">LinkedIn</span>
                  <span className="text-xs text-cream/90">Connect</span>
                </div>
              </a>

              <CvLink
                className="flex flex-1 min-w-[140px] items-center gap-3 rounded-lg border border-cream/15 bg-cream/5 px-4 py-3 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:border-sky/40 hover:bg-cream/10 focus:outline-none"
                href={personal.cv}
                email={personal.email}
                ariaLabel={cvDownloadAria}
                fallbackMessage={cvFallback}
              >
                <svg className="h-5 w-5 fill-none stroke-current text-sky stroke-2 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-cream/55">Download CV</span>
                  <span className="text-xs text-cream/90">Resume PDF</span>
                </div>
              </CvLink>

              <a
                href={`mailto:${personal.email}`}
                className="flex flex-1 min-w-[140px] items-center gap-3 rounded-lg border border-cream/15 bg-cream/5 px-4 py-3 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:border-sky/40 hover:bg-cream/10"
              >
                <svg className="h-5 w-5 fill-none stroke-current text-sky stroke-2 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-cream/55">Email</span>
                  <span className="text-xs text-cream/90 truncate max-w-[130px]">{personal.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

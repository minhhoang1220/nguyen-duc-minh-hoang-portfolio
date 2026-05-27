import CvLink from "./CvLink";

type ContactProps = {
  personal: {
    email: string;
    linkedin: string;
    cv: string;
    location: string;
  };
};

function Contact({ personal }: ContactProps) {
  return (
    <section id="contact" className="section-padding bg-navy text-cream" aria-labelledby="contact-title">
      <div className="container-main">
        <div className="grid min-w-0 gap-10 border border-cream/20 p-5 md:p-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-sky">Reach Out</p>
            <h2 id="contact-title" className="text-balance text-[36px] font-semibold leading-[1.08] text-cream md:text-[56px]">
              Let’s talk about product systems, requirement clarity, and game-oriented BA work.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/80 md:text-lg">
              I’m open to Business Analyst, Associate PM, Product Operations, System/Product Analyst, and Game BA
              conversations where clear thinking can reduce ambiguity and improve execution.
            </p>
          </div>

          <div className="min-w-0 flex flex-col justify-center gap-3">
            <a
              className="inline-flex min-h-12 min-w-0 items-center justify-center break-all border-2 border-cream bg-cream px-4 py-3 text-sm font-medium text-navy transition duration-300 hover:-translate-y-px hover:bg-sky focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy sm:px-6 sm:text-base"
              href={`mailto:${personal.email}`}
              aria-label="Send email to Nguyễn Đức Minh Hoàng"
            >
              {personal.email}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border-2 border-cream bg-transparent px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:bg-cream hover:text-navy focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy"
              href={personal.linkedin}
              aria-label="Open LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <CvLink
              className="inline-flex min-h-12 w-full items-center justify-center border border-cream/35 bg-transparent px-6 py-3 text-base font-medium text-cream transition duration-300 hover:-translate-y-px hover:border-cream hover:bg-navy-accent focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-4 focus:ring-offset-navy"
              href={personal.cv}
              email={personal.email}
              ariaLabel="Download CV"
            >
              Download CV
            </CvLink>
            <p className="pt-3 text-sm font-medium text-cream/70">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

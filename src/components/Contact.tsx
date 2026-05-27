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
    <section id="contact" className="section-padding bg-cream" aria-labelledby="contact-title">
      <div className="container-main">
        <div className="grid gap-10 border border-line bg-card p-6 md:p-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy">Contact</p>
            <h2 id="contact-title" className="text-balance text-3xl font-semibold leading-tight text-navy md:text-[40px]">
              Open to BA, Associate PM, Product Operations, and Game BA conversations.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              For recruiters and hiring teams, the most relevant fit is product-system work where requirement clarity,
              stakeholder alignment, and technical-business translation matter.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <a className="btn-primary" href={`mailto:${personal.email}`} aria-label="Send email to Nguyễn Đức Minh Hoàng">
              {personal.email}
            </a>
            <a className="btn-secondary" href={personal.linkedin} aria-label="Open LinkedIn profile">
              LinkedIn
            </a>
            <a className="btn-ghost" href={personal.cv} aria-label="Download CV">
              Download CV
            </a>
            <p className="pt-3 text-sm font-medium text-muted">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

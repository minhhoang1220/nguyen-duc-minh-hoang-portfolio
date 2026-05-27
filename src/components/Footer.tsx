type FooterProps = {
  personal: {
    name: string;
    shortRole: string;
    location: string;
  };
};

function Footer({ personal }: FooterProps) {
  return (
    <footer className="bg-navy-night py-10 text-cream">
      <div className="container-main flex flex-col gap-4 text-sm font-medium md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{personal.name}</p>
          <p className="mt-1 text-cream/70">{personal.shortRole}</p>
        </div>
        <div className="flex flex-col gap-2 text-cream/70 md:items-end">
          <p>{personal.location}</p>
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

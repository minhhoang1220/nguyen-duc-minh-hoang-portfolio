import { useEffect, useRef, useState } from "react";
import type { PortfolioContent } from "../data/portfolio";

type ProofSnapshotProps = {
  proof: PortfolioContent["proof"];
  socialProof: PortfolioContent["socialProof"];
};

function ProofSnapshot({ proof, socialProof }: ProofSnapshotProps) {
  return (
    <section className="section-full section-padding bg-gradient-to-b from-[#0a0f1e] to-[#080E24] text-cream border-y border-cream/10" aria-labelledby="proof-snapshot-title">
      <div className="container-wide">
        <div className="grid gap-7 pt-2 lg:grid-cols-[0.28fr_0.72fr] lg:gap-12 mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky">{proof.eyebrow}</p>
          <div>
            <h2 id="proof-snapshot-title" className="section-title max-w-5xl text-cream m-0">
              {proof.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-cream/80 md:text-lg">{socialProof.description}</p>
          </div>
        </div>

        {/* Top Statistics Row */}
        <div className="border-t border-cream/10 pt-10">
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {proof.stats.map((stat, index) => {
              const isWideValue = stat.value.length >= 4;

              return (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="stagger-item flex flex-col gap-2 rounded-lg border border-cream/10 bg-black/10 p-5 hover:border-sky/30 transition duration-300"
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  <CountUpStat value={stat.value} className={`text-[36px] font-bold leading-none text-sky md:text-[44px] ${isWideValue ? "tracking-tight" : ""}`} />
                  <dt className="text-xs font-bold uppercase tracking-wider text-cream/90 mt-1">{stat.label}</dt>
                  {stat.subtitle && (
                    <dd className="text-[11px] leading-relaxed text-cream/65 mt-auto">{stat.subtitle}</dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>

        {/* Below Row: 3 evenly distributed proof blocks */}
        <div className="border-t border-cream/10 pt-10 mt-10">
          <div className="grid gap-6 md:grid-cols-3" aria-label={socialProof.eyebrow}>
            {socialProof.cards.map((card, index) => (
              <article
                key={card.title}
                className="stagger-item rounded-lg border border-cream/10 bg-black/20 p-6 md:p-8 hover:-translate-y-1 hover:border-sky/40 transition duration-300 flex flex-col justify-between"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-cream/10 pb-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-sky">{card.label}</p>
                    {card.logo && (
                      <img src={card.logo} alt="" className="h-5 w-auto object-contain shrink-0 opacity-80" />
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight text-cream">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/80">{card.body}</p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 border-t border-cream/10 pt-4">
                  {card.evidence.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-cream/70">
                      <span className="text-sky shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUpStat({ value, className }: { value: string; className: string }) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [displayValue, setDisplayValue] = useState(() => {
    const parsed = parseCountValue(value);
    return parsed ? `${parsed.prefix}0${parsed.suffix}` : value;
  });

  useEffect(() => {
    const node = nodeRef.current;
    const parsed = parseCountValue(value);

    if (!node || !parsed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;
        const start = performance.now();
        const duration = 900;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(parsed.number * eased);
          setDisplayValue(`${parsed.prefix}${current}${parsed.suffix}`);

          if (progress < 1) {
            frame = window.requestAnimationFrame(tick);
          }
        };

        frame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [value]);

  return (
    <dd ref={nodeRef} className={className}>
      {displayValue}
    </dd>
  );
}

function parseCountValue(value: string) {
  const match = value.match(/^(~?)(\d+)(\+?)$/);

  if (!match) {
    return null;
  }

  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
  };
}

export default ProofSnapshot;

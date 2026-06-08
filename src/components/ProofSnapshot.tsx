import { useEffect, useRef, useState } from "react";
import type { PortfolioContent } from "../data/portfolio";

type ProofSnapshotProps = {
  proof: PortfolioContent["proof"];
  socialProof: PortfolioContent["socialProof"];
};

function ProofSnapshot({ proof, socialProof }: ProofSnapshotProps) {
  return (
    <section className="section-proof-snapshot section-padding" aria-labelledby="proof-snapshot-title">
      <div className="container-wide">
        <div className="grid gap-7 border-t border-line pt-7 lg:grid-cols-[0.28fr_0.72fr] lg:gap-12">
          <p className="section-kicker text-navy">{proof.eyebrow}</p>
          <div>
            <h2 id="proof-snapshot-title" className="section-title max-w-5xl text-navy">
              {proof.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">{socialProof.description}</p>
          </div>
        </div>

        <div className="proof-snapshot-shell mt-10">
          <dl className="proof-snapshot-stats">
            {proof.stats.map((stat, index) => {
              const isWideValue = stat.value.length >= 4;

              return (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="proof-stat-card stagger-item"
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  <dt>{stat.label}</dt>
                  <CountUpStat value={stat.value} className={`proof-stat-number ${isWideValue ? "proof-stat-number-wide" : ""}`} />
                </div>
              );
            })}
          </dl>

          <div className="proof-trust-list" aria-label={socialProof.eyebrow}>
            {socialProof.cards.map((card, index) => (
              <article key={card.title} className="proof-trust-card stagger-item" style={{ transitionDelay: `${index * 70}ms` }}>
                <p className="trust-card-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ul>
                  {card.evidence.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
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

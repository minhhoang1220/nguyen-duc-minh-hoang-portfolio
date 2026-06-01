import { useEffect, useRef, useState } from "react";
import type { PortfolioContent } from "../data/portfolio";

type ProofStripProps = {
  proof: PortfolioContent["proof"];
};

function ProofStrip({ proof }: ProofStripProps) {
  return (
    <section className="section-padding bg-navy text-cream" aria-labelledby="proof-title">
      <div className="container-wide">
        <div className="grid gap-8 border-t border-cream/25 pt-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <p className="section-kicker text-sky">{proof.eyebrow}</p>
          <h2 id="proof-title" className="max-w-5xl text-balance text-[36px] font-semibold leading-[1.05] md:text-[64px] lg:text-[80px]">
            {proof.title}
          </h2>
        </div>

        <dl className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {proof.stats.map((stat, index) => {
            const isWideValue = stat.value.length >= 4;

            return (
              <div
                key={`${stat.value}-${stat.label}`}
                className="stagger-item reveal-number min-w-0 border-t border-cream/20 pt-6"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <dt className="min-h-[3rem] text-sm font-semibold leading-6 text-cream/80">{stat.label}</dt>
                <CountUpStat value={stat.value} className={`stat-number mt-3 ${isWideValue ? "stat-number-wide" : ""}`} />
              </div>
            );
          })}
        </dl>
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
        const duration = 1200;

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

export default ProofStrip;

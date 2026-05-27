import { useState } from "react";
import type { MouseEvent } from "react";

type CvLinkProps = {
  href: string;
  email: string;
  className: string;
  children: string;
  ariaLabel?: string;
};

function CvLink({ href, email, className, children, ariaLabel }: CvLinkProps) {
  const [status, setStatus] = useState("");

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    setStatus("");

    try {
      const response = await fetch(href, { method: "HEAD", cache: "no-store" });
      if (response.ok) {
        window.location.href = href;
        return;
      }
    } catch {
      // Fall through to the visible fallback message below.
    }

    setStatus(`CV file is unavailable right now. Please email ${email} and I will send it directly.`);
  };

  return (
    <span className="block">
      <a className={className} href={href} onClick={handleClick} aria-label={ariaLabel ?? children} download>
        {children}
      </a>
      {status ? (
        <span className="mt-2 block text-sm leading-6 opacity-75" role="status" aria-live="polite">
          {status}
        </span>
      ) : null}
    </span>
  );
}

export default CvLink;

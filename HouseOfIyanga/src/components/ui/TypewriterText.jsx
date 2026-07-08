import React, { useEffect, useRef, useState } from "react";

function TypewriterText({ text = "IYANGA", speed = 180, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span ref={ref} className={`inline-flex items-center justify-center w-full ${className}`}>
      <span>{displayed}</span>
      <span
        aria-hidden="true"
        className="inline-block w-[3px] md:w-1.5 h-[0.85em] bg-current ml-2 md:ml-3 animate-blink"
      />
    </span>
  );
}

export default TypewriterText;

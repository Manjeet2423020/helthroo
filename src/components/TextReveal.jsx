import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextReveal = ({ text, className = "", delay = 0, wordClassName = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".char-span");
    
    // Set initial offscreen position
    gsap.set(chars, { y: "105%" });

    const anim = gsap.to(chars, {
      y: "0%",
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.kill();
    };
  }, [text, delay]);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="char-reveal mr-2 inline-block">
          <span className={`char-span inline-block ${wordClassName}`}>{word}</span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;

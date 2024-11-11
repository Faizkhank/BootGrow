import React, { useState, useEffect, useRef } from "react";

const FadeInSection = ({ children, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
      ref={domRef}
      style={{ "--fade-duration": duration }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

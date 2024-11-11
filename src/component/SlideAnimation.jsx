import React, { useState, useEffect, useRef } from "react";

const SlideAnimation = ({ children, animationClass }) => {
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
  console.log(children.props.className);
  return React.cloneElement(children, {
    ref: domRef,
    className: `${children.props.className} ${isVisible ? animationClass : ""}`,
  });
};
export default SlideAnimation;

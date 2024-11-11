import { useRef, useEffect } from "react";

const Countdown = ({ targetValue }) => {
  const elementRef = useRef(null);
  const domRef = useRef(null);
  const counterRef = useRef(null); // Use a ref to keep track of the interval

  useEffect(() => {
    let startValue = 0;
    const duration = Math.floor(2000 / targetValue);

    // Function to start or restart the counter
    const startCounter = () => {
      startValue = 0; // Reset startValue to 0
      if (counterRef.current) clearInterval(counterRef.current); // Clear any existing interval

      // Start the interval
      counterRef.current = setInterval(() => {
        startValue += 1;
        if (elementRef.current) {
          elementRef.current.textContent = startValue;
        }
        if (startValue === targetValue) {
          clearInterval(counterRef.current);
        }
      }, duration);
    };

    // Observer to trigger the countdown when the element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(); // Start or restart the countdown
        } else {
          clearInterval(counterRef.current); // Optionally clear the interval if it goes out of view
        }
      });
    });

    // Observe the element
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Cleanup function to clear the interval and disconnect the observer on unmount
    return () => {
      clearInterval(counterRef.current); // Clear the interval if component unmounts
      observer.disconnect();
    };
  }, [targetValue]);

  return (
    <span ref={domRef} className="countdown-wrapper">
      <span className="countdown" ref={elementRef}></span>
    </span>
  );
};
export default Countdown;

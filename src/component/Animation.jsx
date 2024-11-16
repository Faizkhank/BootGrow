import { useState, useEffect } from "react";
import backgroundimage from "../assets/background.jpg";

function Animation() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isVisible, setVisible] = useState(false);
  // Function to handle mouse move and update translation
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate translation based on mouse position
    const translateX = ((clientX / innerWidth) * 2 - 1) * 20;
    const translateY = ((clientY / innerHeight) * 2 - 1) * 20;

    setTranslate({
      x: translateX + translateY, // Shifting diagonally
      y: translateY - translateX, // Adjusts for a 45-degree effect
    });
  };

  useEffect(() => {
    setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents image repetition
        zIndex: "0",
        display: "flex",
        width: "100%", // Full width without causing overflow
        height: "100vh", // Full viewport height
        overflow: "hidden",
      }}
    >
      <div className="flex bg-purple-400 overflow-hidden">
        <div className="absolute xl:w-[550px] xl:h-[550px] sm:w-[300px] moving-gradient sm:h-[300px]  -top-32 md:-top-48 lg:-top-64 rounded-[55px] opacity-85"></div>
        <div
          style={{
            transform: `translate3d(${translate.y}px, ${translate.x}px, 0px) rotate(45deg)`,
            transition: "transform 0.4s ease",
          }}
          className="absolute xl:w-[750px] xl:h-[750px] sm:w-[300px] sm:h-[300px] rotate-[35deg]  -top-32 md:-top-48 lg:-top-80 rounded-[55px] opacity-75 bg-gradient-to-tr from-red-600 to-blue-600"
        >
          <div
            style={{
              transform: `translate3d(${translate.y}px, ${translate.x}px, 0px) rotate(4deg)`,
              transition: "transform 0.4s ease",
            }}
            className="absolute xl:w-[750px] xl:h-[750px] sm:w-[300px] sm:h-[300px] left-32 border border-white bottom-10 rounded-[55px]"
          ></div>
        </div>
      </div>
      <div
        className={`text-white transform transition-all duration-500 ease-in-out sm:p-14 p-1 mx-7 sm:mx-20 relative z-10 w-1/2 mt-24 font-semibold ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h1 className="text-7xl">Welcome to Innovation</h1>
        <h1 className="text-4xl mt-6">
          Empowering businesses with cutting-edge IT solutions.
        </h1>
      </div>
    </div>
  );
}

export default Animation;

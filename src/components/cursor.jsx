import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("white");

  // Move cursor
  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // Dynamic cursor color based on section background
 useEffect(() => {
  const sections = document.querySelectorAll("section, a, button");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        const bg = window.getComputedStyle(element).backgroundColor;

        // Make sure bg is valid
        if (bg && bg !== "transparent") {
          const rgb = bg.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const brightness =
              (parseInt(rgb[0]) * 299 +
                parseInt(rgb[1]) * 587 +
                parseInt(rgb[2]) * 114) / 1000;
            setCursorColor(brightness > 125 ? "#181818" : "#EFEFEF");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => sections.forEach((sec) => observer.unobserve(sec));
}, []);

  return (
    <>
      {/* Cursor */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: 15,
          height: 15,
          borderRadius: "50%",
          background: cursorColor,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "background 0.15s, transform 0.1s ease",
          mixBlendMode: "difference",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner magnifying effect */}
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: cursorColor,
            animation: "innerPulse 1s infinite alternate",
          }}
        />
      </div>

      <style>{`
        @keyframes innerPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

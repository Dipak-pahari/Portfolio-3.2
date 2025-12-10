import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("white");
  const [isHovering, setIsHovering] = useState(false);

  // Move cursor
  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // Dynamic cursor color
  useEffect(() => {
    const sections = document.querySelectorAll("section, a, button");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          const bg = window.getComputedStyle(element).backgroundColor;

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

  // Detect hover on interactive elements
  useEffect(() => {
    const hoverTargets = document.querySelectorAll("a, button, [data-hover='true']");

    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? 32 : 15,  // grow on hover
          height: isHovering ? 32 : 15,
          borderRadius: "50%",
          background: cursorColor,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "background 0.15s, width 0.2s ease, height 0.2s ease",
          mixBlendMode: "difference",
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default CustomCursor;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/analytics"; // same helper as PrimaryButton
import "./SecondaryButton.scss";

function PrimaryButton_2({ text, onClick, style = {}, className = "" }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`PrimaryButtonSec-container ${hover ? "hover" : ""} ${active ? "active" : ""} ${className}`}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={(e) => {
        // 🔹 Fully automatic GA tracking
        const section = e.currentTarget.getAttribute("data-section") || null;
        const project = e.currentTarget.getAttribute("data-project") || null;

        trackEvent("primary_button_click", {
          button_text: text,
          page: location.pathname,
          section,
          project,
        });

        // 🔹 Keep your original onClick
        if (onClick) onClick(e);
      }}
    >
      <span>{text}</span>
    </div>
  );
}

export default PrimaryButton_2;

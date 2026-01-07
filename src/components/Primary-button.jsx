import { useState } from "react";
import { trackEvent } from "../utils/analytics";
import { useLocation } from "react-router-dom"; // For page path
import "./Primary-button.scss";

function PrimaryButton({ text, onClick, style = {}, className = "", type = "button", form }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const location = useLocation(); // automatically detect page path

  return (
    <button
      type={type}
      form={form}
      className={`Primary-button-container ${hover ? "hover" : ""} ${active ? "active" : ""} ${className}`}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={(e) => {
        // 🔹 Fully automatic GA tracking
        const section = e.currentTarget.getAttribute("data-section") || null; // optional
        const project = e.currentTarget.getAttribute("data-project") || null; // optional

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
    </button>
  );
}

export default PrimaryButton;
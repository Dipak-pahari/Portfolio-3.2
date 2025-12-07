import { useState } from "react";
import "./Primary-button.scss";

function PrimaryButton({ text, onClick }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div
      className={`Primary-button-container ${hover ? "hover" : ""} ${
        active ? "active" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
    >
      <span>{text}</span>
    </div>
  );
}

export default PrimaryButton;

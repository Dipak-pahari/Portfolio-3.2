import { useState } from "react";
import "./SecondaryButton.scss";

function PrimaryButton_2({ text, onClick, style = {}, className = "" }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div
      className={`PrimaryButtonSec-container ${hover ? "hover" : ""} ${
        active ? "active" : ""
      } ${className}`}
      style={style}
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

export default PrimaryButton_2;

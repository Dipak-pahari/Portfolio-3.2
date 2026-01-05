import { useState } from "react";
import "./Primary-button.scss";

function PrimaryButton({
  text,
  onClick,
  style = {},
  className = "",
  type = "button",
  form,
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <button
      type={type}
      form={form}
      className={`Primary-button-container ${hover ? "hover" : ""} ${
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
    </button>
  );
}

export default PrimaryButton;

import React from "react";
import "./Secondary-button.scss";
import { useState } from "react";

function SecondaryButton({ text, onClick }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
    return (
    <div    
        className={`Secondary-button-container ${hover ? "hover" : ""} ${
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
export default SecondaryButton;
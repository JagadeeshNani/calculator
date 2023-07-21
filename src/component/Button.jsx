import React from "react";
import "../styles/Button.css";

const Button = ({ name, orange, wide, clickHandler }) => {
  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];
  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

export default Button;

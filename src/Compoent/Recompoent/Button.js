import React from "react";
import "./styles.css";
const Button = ({ text, cls, sy }) => {
  return (
    <button className={cls}>
      {text}
      {sy}
    </button>
  );
};

export default Button;

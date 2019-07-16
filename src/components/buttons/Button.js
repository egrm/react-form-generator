import React from "react";

function Button({label, type = "button"}) {
  return <button type={type}>{label}</button>;
}

export default Button;

import React from "react";

function Button({label, type = "button"}) {
  return (
    <button
      className="link pa2 ba b--silver br2 mr2 bg-light-gray"
      type={type}
    >
      {label}
    </button>
  );
}

export default Button;

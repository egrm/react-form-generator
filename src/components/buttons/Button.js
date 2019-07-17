import React from "react";

function Button({label, type = "button"}) {
  return (
    <button
      className="link pa2 ba b--silver br2 bg-light-gray mt3 mr3"
      type={type}
    >
      {label}
    </button>
  );
}

export default Button;

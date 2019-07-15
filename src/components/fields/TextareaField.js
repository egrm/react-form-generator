import React from "react";

function TextareaField({label, name}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} />
    </div>
  );
}

export default TextareaField;

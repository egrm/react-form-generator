import React from "react";

function BasicField({label, name, type}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
    </div>
  );
}

export default BasicField;

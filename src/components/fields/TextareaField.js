import React from "react";

function TextareaField({label, name}) {
  return (
    <div className="flex flex-row justify-between items-center w-100 mt2 pb2 mb1 bb b--light-gray">
      <label htmlFor={name} className="pa1 mr1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        style={{resize: "none", font: "inherit"}}
        className="w-100 mw5 pa1 ba b--silver"
      />
    </div>
  );
}

export default TextareaField;

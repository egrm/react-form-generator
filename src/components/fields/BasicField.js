import React from "react";

function BasicField({label, name, type}) {
  return (
    <div className="flex flex-row justify-between items-center w-100 mb2 pt2 pb2 bb b--light-gray">
      <label htmlFor={name} className="pa1 mr1 self-end">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-100 mw5 pa1"
        type={type}
      />
    </div>
  );
}

export default BasicField;

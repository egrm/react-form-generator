import React from "react";

function BasicField({label, name, type}) {
  return (
    <div className="flex flex-row justify-between items-center w-100 mt2 pb2 mb1 bb b--light-gray">
      <label htmlFor={name} className="pa1 mr1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-100 mw5 pa1 ba b--silver"
        type={type}
      />
    </div>
  );
}

export default BasicField;

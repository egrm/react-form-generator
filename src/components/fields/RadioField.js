import React from "react";
import nanoid from "nanoid";

function RadioField({label, name, type, options}) {
  function Option({label, value, name}) {
    const id = nanoid();
    value = value || label;
    return (
      <div>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
  return (
    <div>
      <p>{label}</p>
      {options.map((option) => (
        <Option {...option} name={name} />
      ))}
    </div>
  );
}

export default RadioField;

import React from "react";
import nanoid from "nanoid";

function RadioField({label, name, type, options}) {
  function Option({label, value, name}) {
    const id = nanoid();
    label = label || value;
    return (
      <div>
        <input
          type="radio"
          id={value}
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
        <Option {...option} name={name} key={nanoid()}/>
      ))}
    </div>
  );
}

export default RadioField;

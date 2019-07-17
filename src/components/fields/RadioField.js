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
          className="mr2"
          name={name}
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-between items-center w-100 mt2 pb2 mb1 bb b--light-gray">
      <p>{label}</p>
      {options.map((option) => (
        <Option {...option} name={name} key={nanoid()}/>
      ))}
    </div>
  );
}

export default RadioField;

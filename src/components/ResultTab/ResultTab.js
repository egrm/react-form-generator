import React from "react";
import nanoid from "nanoid";
import BasicField from "../fields/BasicField.js";
import RadioField from "../fields/RadioField.js";
import TextareaField from "../fields/TextareaField.js";
import Button from "../buttons/Button.js";

function ResultTab({config, className = "", active}) {
  function renderField(field) {
    const key = nanoid();
    field.name = field.name || nanoid();
    field.label = field.label || "field label";
    switch (field.type) {
      case "radio":
        return <RadioField {...field} key={key} />;
      case "textarea":
        return <TextareaField {...field} key={key} />;
      default:
        return <BasicField {...field} key={key} />;
    }
  }
  if (config === null) {
    return (
      <div
        id="ResultTab"
        className={`${className}${active ? "" : " dn"}`}
      >
        <p className="f4 i gray">no form config applied</p>
      </div>
    );
  } else {
    return (
      <div
        id="ResultTab"
        className={`f5 ${className}${active ? "" : " dn"}`}
      >
        <form
          className="h-100 overflow-y-auto"
          action="javascript:void(0)"
        >
          <h3>{config.title || "Your Form"}</h3>
          <div>
            {config.fields.map((field, i) =>
              renderField(field),
            )}
          </div>
          <div className="mt2">
            {config.buttons.map((button, i) => (
              <Button {...button} key={nanoid()} />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

export default ResultTab;

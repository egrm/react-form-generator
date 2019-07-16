import React from "react";
import nanoid from "nanoid";
import BasicField from "../fields/BasicField.js";
import RadioField from "../fields/RadioField.js";
import TextareaField from "../fields/TextareaField.js";
import Button from "../buttons/Button.js";

function ResultTab({config, className=''}) {
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
  return (
    <div id="ResultTab" className={className}>
      <form className="h-100 overflow-y-auto" action="javascript:void(0)">
        <h3>{config.title || "Your Form"}</h3>
        <div>
          {config.fields.map((field, i) =>
            renderField(field),
          )}
        </div>
        <br />
        <div>
          {config.buttons.map((button, i) => (
            <Button {...button} key={nanoid()} />
          ))}
        </div>
      </form>
    </div>
  );
}

export default ResultTab;

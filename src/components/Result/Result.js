import React from "react";
import nanoid from "nanoid";
import BasicField from "../fields/BasicField.js";
import RadioField from "../fields/RadioField.js";
import TextareaField from "../fields/TextareaField.js";
import Button from "../buttons/Button.js";

function Result({config}) {
  function renderField(field) {
    field.name = field.name || nanoid();
    field.label = field.label || "field label";
    switch (field.type) {
      case "radio":
        return <RadioField {...field} />;
      case "textarea":
        return <TextareaField {...field} />;
      default:
        return <BasicField {...field} />;
    }
  }
  return (
    <div id="result">
      <form action="javascript:void(0)">
        <h3>{config.title || "Your Form"}</h3>
        <div>
          {config.fields.map((field, i) =>
            renderField(field),
          )}
        </div>
        <br />
        <div>
          {config.buttons.map((button, i) => (
            <Button {...button} />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Result;

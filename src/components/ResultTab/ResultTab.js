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
  function generateFields(fields) {
    if (
      // ugly guards.
      // in real world proper json schema validation is needed
      fields === undefined ||
      Object.keys(fields).length === 0
    ) {
      return null;
    } else {
      return fields.map((field, i) => renderField(field));
    }
  }
  function generateButtons(buttons) {
    if (
      buttons === undefined ||
      Object.keys(buttons).length === 0
    ) {
      return null;
    } else {
      return buttons.map((button, i) => (
        <Button {...button} key={nanoid()} />
      ));
    }
  }
  if (config === null || Object.keys(config).length === 0) {
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
          <h3>{config.title || "default title"}</h3>
          <div>{generateFields(config.fields)}</div>
          <div className="mt2">
            {generateButtons(config.buttons)}
          </div>
        </form>
      </div>
    );
  }
}

export default ResultTab;

import React from "react";
import nanoid from "nanoid";
import testConfig from "./testConfig.js";

function BasicField({label, name, type}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
    </div>
  );
}

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

function TextareaField({label, name}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea id={this} name={name} />
    </div>
  );
}

function FormButton({label, type}) {
  return <button type={type}>{label}</button>;
}

function Result({config}) {
  function renderField(field) {
    field.name = field.name || nanoid();
    field.label = field.label || `Label for ${field.type}`;
    switch (field.type) {
      case "radio":
        return <RadioField {...field} />;
      case "textarea":
        return <TextareaField {...field} />;
      default:
        return <BasicField {...field} />;
    }
  }
  function renderButton(button) {
    button.name = button.name || "Click here";
    return <FormButton {...button} />;
  }
  return (
    <div id="result">
      <h3>{config.title || "Your Form"}</h3>
      <div>
        {config.fields.map((field, i) =>
          renderField(field),
        )}
      </div>
      <br />
      <div>
        {config.buttons.map((button, i) =>
          renderButton(button),
        )}
      </div>
    </div>
  );
}

function App() {
  const [config, setConfig] = React.useState(testConfig);
  return (
    <>
      <div id="config">
        <form action="javascript:void(0)">
          <textarea
            name="config"
            style={{
              height: "30vw",
              width: "50vh",
            }}
            value={config}
            onChange={(e) => {
              setConfig(e.target.value);
            }}
          />
          <br />
          <button type="submit">Apply</button>
        </form>
      </div>
      <Result config={JSON.parse(config)} />
    </>
  );
}

export default App;

import React from "react";
import nanoid from "nanoid";
import testConfig from "./testConfig.js";
import BasicField from "./components/fields/BasicField.js";
import RadioField from "./components/fields/RadioField.js";
import TextareaField from "./components/fields/TextareaField.js";
import Button from "./components/buttons/Button.js";

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

import React from "react";
import nanoid from "nanoid";
import testConfig from './testConfig.js'

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

function Result({config}) {
  function renderItem(item) {
    item.name = item.name || nanoid();
    item.label = item.label || `Label for ${item.type}`;
    switch (item.type) {
      case "radio":
        return <RadioField {...item} />;
      case "textarea":
        return <TextareaField {...item} />;
      default:
        return <BasicField {...item} />;
    }
  }
  return (
    <div id="result">
      <h3>{config.title || "Your Form"}</h3>
      {config.items.map((el, i) => renderItem(el))}
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

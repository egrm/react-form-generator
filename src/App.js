import React from "react";
import nanoid from "nanoid";

function TextField({ label, name }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" />
    </div>
  );
}

function Result({ config }) {
  function renderItem(item) {
    item.name = item.name || nanoid();
    item.label = item.label || `${item.type} label`;
    switch (item.type) {
      case "text":
        return <TextField {...item} />;
      default:
        return <TextField {...item} />;
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
  const [config, setConfig] = React.useState(`{
  "title": "my form",
  "items": [
    {
      "label": "count",
      "type": "number"
    },
    {
      "label": "is editable",
      "type": "checkbox"
    },
    {
      "label": "caption",
      "type": "text"
    },
    {
      "label": "date",
      "type": "date"
    },
    {
      "label": "which color?",
      "type": "radio",
      "options": [
        {
          "label": "blue",
          "value": "blue"
        },
        {
          "label": "blue",
          "value": "blue"
        },
        {
          "label": "blue",
          "value": "blue"
        }
      ]
    }
  ]
}`);
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
    </>
  );
}

export default App;

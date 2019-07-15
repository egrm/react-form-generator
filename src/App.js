import React from "react";

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

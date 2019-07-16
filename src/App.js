import React from "react";
import nanoid from "nanoid";
import ResultTab from "./components/ResultTab/ResultTab.js";
import ConfigTab from "./components/ConfigTab/ConfigTab.js";
import "tachyons";
import "./App.css";
import testConfig from "./testConfig.js";

function App() {
  const [config, setConfig] = React.useState(testConfig);
  const tabClasses = "dn tab w-100 w-50-ns absolute";
  const tabNavClasses = {
    forLabel: "",
    forInput: "dn"
  }
  return (
    <div className="helvetica">
      <input type="radio" name="tabs" id="ConfigTab-nav" className={tabNavClasses.forInput} defaultChecked />
      <label htmlFor="ConfigTab-nav" className={tabNavClasses.forLabel}>Config</label>
      <input type="radio" name="tabs" id="ResultTab-nav" className={tabNavClasses.forInput} />
      <label htmlFor="ResultTab-nav" className={tabNavClasses.forLabel}>Result</label>
      <ConfigTab
        onChange={(e) => {
          setConfig(e.target.value);
        }}
        className={tabClasses}
        value={config}
      />
        <ResultTab
          config={JSON.parse(config)}
          className={tabClasses}
        />
        </div>
  );
}

export default App;

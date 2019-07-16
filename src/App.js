import React from "react";
import nanoid from "nanoid";
import ResultTab from "./components/ResultTab/ResultTab.js";
import ConfigTab from "./components/ConfigTab/ConfigTab.js";
import "tachyons";
import testConfig from "./testConfig.js";

function App() {
  const [config, setConfig] = React.useState(testConfig);
  const tabClasses = "w-100 w-70-ns";
  return (
    <>
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
    </>
  );
}

export default App;

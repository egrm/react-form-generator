import React from "react";
import nanoid from "nanoid";
import testConfig from "./testConfig.js";
import ResultTab from "./components/ResultTab/ResultTab.js";
import ConfigTab from "./components/ConfigTab/ConfigTab.js";

function App() {
  const [config, setConfig] = React.useState(testConfig);
  return (
    <>
      <ConfigTab
        onChange={(e) => {
          setConfig(e.target.value);
        }}
        value={config}
      />
      <ResultTab config={JSON.parse(config)} />
    </>
  );
}

export default App;

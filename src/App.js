import React from "react";
import nanoid from "nanoid";
import testConfig from "./testConfig.js";
import Result from "./components/Result/Result.js";
import Config from "./components/Config/Config.js";

function App() {
  const [config, setConfig] = React.useState(testConfig);
  return (
    <>
      <Config
        onChange={(e) => {
          setConfig(e.target.value);
        }}
        value={config}
      />
      <Result config={JSON.parse(config)} />
    </>
  );
}

export default App;

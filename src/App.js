import React from "react";
import nanoid from "nanoid";
import {Promise} from "bluebird";
import ResultTab from "./components/ResultTab/ResultTab.js";
import ConfigTab from "./components/ConfigTab/ConfigTab.js";
import TabButton from "./components/buttons/TabButton.js";
import "tachyons";
import testConfig from "./testConfig.js";

function App() {
  const [currentTab, setCurrentTab] = React.useState(
    "Config",
  );
  const [jsonConfig, setJsonConfig] = React.useState(
    testConfig,
  );
  const [resultConfig, setResultConfig] = React.useState({
    data: null,
    error: false,
  });
  function handleConfigSubmit(json) {
    // TODO: use AJV for schema validation
    // current behaviour: crashes if passed an invalid config
    Promise.method(JSON.parse)(json)
      .then((result) => {
        setResultConfig({data: result, error: false});
      })
      .catch((err) => {
        setResultConfig((prevConfig) => ({
          ...prevConfig,
          error: true,
        }));
      });
  }
  const tabClasses = "pa3 ba b--silver flex-auto";
  const tabNavClasses = {
    forLabel: "dib pa2 ma2 dim br2",
  };
  return (
    <div
      id="container"
      className="helvetica w-100 vh-100 flex flex-column justify-start justify-center-ns items-center"
    >
      <div className="w-100 pa3 mw6 vh-100 vh-75-ns flex flex-column">
        <div>
          <TabButton
            label="Config"
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <TabButton
            label="Result"
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
        <ConfigTab
          onChange={(e) => {
            setJsonConfig(e.target.value);
          }}
          onSubmit={() => {
            handleConfigSubmit(jsonConfig);
          }}
          className={tabClasses}
          value={jsonConfig}
          error={resultConfig.error}
          active={currentTab === "Config"}
        />
        <ResultTab
          config={resultConfig.data}
          className={tabClasses}
          active={currentTab === "Result"}
        />
      </div>
    </div>
  );
}

export default App;

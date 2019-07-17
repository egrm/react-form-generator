import React from "react";
import nanoid from "nanoid";
import ResultTab from "./components/ResultTab/ResultTab.js";
import ConfigTab from "./components/ConfigTab/ConfigTab.js";
import TabButton from "./components/buttons/TabButton.js";
import "tachyons";
import testConfig from "./testConfig.js";

function App() {
  const [config, setConfig] = React.useState(testConfig);
  const [currentTab, setCurrentTab] = React.useState(
    "Config",
  );
  const tabClasses = "flex-auto";
  ("w-100 w-50-ns vh-50-ns overflow-hidden");
  const tabNavClasses = {
    forLabel: "dib pa2 ma2 dim br2",
  };
  return (
    <div
      id="container"
      className="helvetica w-100 vh-100 flex flex-column justify-start justify-center-ns items-center"
    >
      <div className="w-100 pa3 mw6 vh-100 vh-50-ns flex flex-column">
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
            setConfig(e.target.value);
          }}
          className={tabClasses}
          value={config}
          active={currentTab === "Config"}
        />
        <ResultTab
          config={JSON.parse(config)}
          className={tabClasses}
          active={currentTab === "Result"}
        />
      </div>
    </div>
  );
}

export default App;

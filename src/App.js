import React from "react";
import nanoid from "nanoid";
import ResultTab from "./components/ResultTab/ResultTab.js";
import ConfigTab from "./components/ConfigTab/ConfigTab.js";
import "tachyons";
import "./App.css";
import testConfig from "./testConfig.js";

function App() {
  const [config, setConfig] = React.useState(testConfig);
  const [currentTab, setCurrentTab] = React.useState(
    "Config",
  );
  const tabClasses =
    "absolute w-100 w-50-ns vh-50-ns overflow-hidden";
  const tabNavClasses = {
    forLabel: "dib pa2 ma2 dim br2",
  };
  return (
    <div
      id="container"
      className="w-100 vh-100 flex flex-column justify-start justify-center-ns items-center"
    >
      <div className="helvetica border-box w-100 w-50-ns vh-100 vh-50-ns">
        <div>
          <button
            onClick={() => {
              setCurrentTab("Config");
            }}
          >
            Config
          </button>
          <button
            onClick={() => {
              setCurrentTab("Result");
            }}
          >
            Result
          </button>
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

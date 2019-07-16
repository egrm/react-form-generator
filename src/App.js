import React from "react";
import nanoid from "nanoid";
import testConfig from "./testConfig.js";
import Result from "./components/Result/Result.js";

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

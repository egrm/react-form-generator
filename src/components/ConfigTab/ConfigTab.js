import React from "react";

function ConfigTab({onChange, onSubmit, value}) {
  return (<div id="config">
    <form action="javascript:void(0)" onSubmit={onSubmit}>
      <textarea
        name="config"
        style={{
          height: "30vw",
          width: "50vh",
        }}
        value={value}
        onChange={onChange}
      />
      <br />
      <button type="submit">Apply</button>
    </form>
  </div>);
}

export default ConfigTab;

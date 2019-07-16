import React from "react";

function ConfigTab({onChange, onSubmit, value, className=''}) {
  return (
    <div id="ConfigTab" className={className}>
      <form className="h-100 flex flex-column" action="javascript:void(0)" onSubmit={onSubmit}>
        <textarea
          name="config"
          style={{resize: "none"}}
          className="bn pa0 w-100 h-100"
          value={value}
          onChange={onChange}
        />
          <div>
            <button className="" type="submit">Apply</button>
          </div>
      </form>
    </div>
  );
}

export default ConfigTab;

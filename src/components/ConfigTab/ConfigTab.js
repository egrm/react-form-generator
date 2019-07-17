import React from "react";

function ConfigTab({
  onChange,
  onSubmit,
  value,
  className = "",
  active,
}) {
  return (
    <div
      id="ConfigTab"
      className={`${className}${active ? "" : " dn"}`}
    >
      <form
        className="h-100 flex flex-column"
        action="javascript:void(0)"
        onSubmit={onSubmit}
      >
        <textarea
          name="config"
          style={{resize: "none"}}
          className="pa1 ba b--silver w-100 h-100"
          value={value}
          onChange={onChange}
        />
        <div>
          <button className="pa2 br2 mt3" type="submit">Apply</button>
        </div>
      </form>
    </div>
  );
}

export default ConfigTab;

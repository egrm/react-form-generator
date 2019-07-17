import React from "react";
import Button from "../buttons/Button.js";

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
          <Button type="submit" label="Apply" />
        </div>
      </form>
    </div>
  );
}

export default ConfigTab;

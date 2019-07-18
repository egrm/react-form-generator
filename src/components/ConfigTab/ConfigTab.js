import React from "react";
import Button from "../buttons/Button.js";

function ConfigTab({
  onChange,
  onSubmit,
  value,
  className = "",
  active,
  error,
}) {
  return (
    <div
      id="ConfigTab"
      className={`${className} ${
        active ? "flex flex-column" : "dn"
      }`}
    >
      <form
        className="flex flex-column flex-auto justify-start"
        action="javascript:void(0)"
        onSubmit={onSubmit}
      >
        <textarea
          name="config"
          style={{resize: "none"}}
          className={`pa2 ba w-100 flex-auto ${
            error ? "bw2 b--light-red" : "b--silver"
          }`}
          value={value}
          onChange={onChange}
        />
        {error && (
          <p className="light-red b">
            Please, provide valid JSON
          </p>
        )}
        <div className="mt3">
          <Button type="submit" label="Apply" />
        </div>
      </form>
    </div>
  );
}

export default ConfigTab;

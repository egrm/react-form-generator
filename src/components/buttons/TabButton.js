import React from "react";

function TabButton({label, setCurrentTab}) {
  return (
    <button
      onClick={() => {
        setCurrentTab(label);
      }}
    >
      {label}
    </button>
  );
}

export default TabButton;

import React from "react";

function TabButton({label, setCurrentTab, currentTab}) {
  return (
    <button
      onClick={() => {
        setCurrentTab(label);
      }}
      className={`${
        label === currentTab ? "bg-black white" : ""
      }`}
    >
      {label}
    </button>
  );
}

export default TabButton;

import React from "react";

function TabButton({label, setCurrentTab, currentTab}) {
  return (
    <button
      onClick={() => {
        setCurrentTab(label);
      }}
      className={`link pa2 ba b--silver br3 br--top ${
        label === currentTab
          ? "white bg-gray"
          : "black bg-light-gray"
      }`}
    >
      {label}
    </button>
  );
}

export default TabButton;

import React from "react";

const InputButton = ({ text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-12 w-96 hover:bg-blue-200 ${isSelected &&
        "bg-blue-200"} rounded border-solid border border-gray-300`}
    >
      {text}
    </button>
  );
};

export default InputButton;

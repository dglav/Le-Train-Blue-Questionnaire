import React from "react";

const TextInput = ({ onInput }) => {
  return (
    <input
      type="text"
      onInput={e => onInput(e.target.value)}
      className="w-full p-2 border-solid border border border-gray-300 rounded"
    />
  );
};

export default TextInput;

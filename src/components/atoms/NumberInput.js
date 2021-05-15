import React from "react";

const NumberInput = ({ onInput }) => {
  return (
    <input
      type="number"
      onInput={e => onInput(e.target.value)}
      className="w-full p-2 border-solid border border border-gray-300 rounded"
    />
  );
};

export default NumberInput;

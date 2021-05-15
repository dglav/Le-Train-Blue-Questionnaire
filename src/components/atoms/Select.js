import React from "react";

const Select = ({ value, options, onChange }) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="p-2 border-solid border border-gray-300 rounded"
    >
      {options.map((option, index) => (
        <option key={`option${index}`} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

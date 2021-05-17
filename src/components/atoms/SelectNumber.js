import React, { memo } from "react";
import { Select } from "@chakra-ui/react";

const SelectNumber = ({
  firstNumber,
  lastNumber,
  placeholder,
  value,
  onChange
}) => {
  let numbers = [];
  for (let i = firstNumber; i <= lastNumber; i++) {
    numbers.push(i);
  }

  return (
    <Select
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    >
      {numbers.map((number, key) => (
        <option key={key} value={number}>
          {number}
        </option>
      ))}
    </Select>
  );
};

export default memo(SelectNumber);

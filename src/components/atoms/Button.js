import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-12 w-72 hover:bg-blue-200 rounded border-solid border border-gray-300`}
    >
      {text}
    </button>
  );
};

export default Button;

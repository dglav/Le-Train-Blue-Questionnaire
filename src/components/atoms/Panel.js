import React from "react";

const Panel = ({ title, content }) => {
  return (
    <div className="border-solid border border-gray-300 rounded max-w-5xl mx-auto mb-8">
      <div className="h-10 bg-gray-300 flex items-center p-6 rounded-t border-b border-gray-300">
        <p>{title}</p>
      </div>
      <div className="flex justify-center p-4">{content}</div>
    </div>
  );
};

export default Panel;

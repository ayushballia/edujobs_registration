import React, { useEffect } from "react";

const OptionButtons = ({ options, onSelect, selectedOption }) => {
  useEffect(() => {
    if (selectedOption) {
      onSelect(selectedOption);
    }
  }, [selectedOption, onSelect]);

  return (
    <div className="flex items-center space-x-6">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`flex px-[32px] py-[10px] border border-gray-300 rounded-[15px] text-[18px] capitalize ${
            selectedOption === option ? "bg-[#0A65CC] font-semibold text-white" : "bg-white text-black"
          }`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;
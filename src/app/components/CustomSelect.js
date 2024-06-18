"use client";

import React, { useState, useEffect } from "react";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomSelect = ({
  label,
  placeholder,
  options = [],
  value = [],
  onChange,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowOptions(true);
  };

  const addItem = (item) => {
    if (!value.includes(item)) {
      onChange([...value, item]);
    }
    setShowOptions(false); // Hide options after selection
    setInputValue(""); // Reset input value
  };

  const removeItem = (item) => {
    onChange(value.filter((val) => val !== item));
  };

  const filteredOptions = options.filter(
    (option) =>
      option &&
      option.label &&
      option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (!showOptions) {
      setInputValue("");
    }
  }, [showOptions]);

  return (
    <div className="mb-8">
      <div>
        <div>
          <p className="capitalize text-[18px] font-semibold text-[#232323]">
            {label ? label : "\u00A0".repeat(5)}
          </p>
        </div>
      </div>
      <div className="border-[1px] rounded-[15px] border-gray-300 p-[16px] relative my-4">
        <div className="flex items-center gap-2">
          {value.map((item, i) => (
            <div
              className="flex gap-2 border-[1px] rounded-[15px] border-gray-300 px-3 py-[6px] w-max cursor-pointer text-xs md:text-sm font-semibold text-white bg-[#0A65CC]"
              key={i}
            >
              {item.label}
              <span
                onClick={() => removeItem(item)}
                className="text-gray-400 hover:scale-105 hover:text-gray-600 transition-all"
              >
                <FontAwesomeIcon color="#fff" icon={faXmark} />
              </span>
            </div>
          ))}
          <div
            onClick={() => setShowOptions((prev) => !prev)}
            className="flex justify-center relative w-full"
          >
            <input
              className="border-none outline-none flex-grow placeholder:text-[10px] placeholder:text-[#9199A3] w-full"
              value={inputValue}
              placeholder={placeholder}
              onChange={handleInputChange}
              autoFocus={showOptions}
            />
            <div>
              <span>
                <FontAwesomeIcon
                  color="#232323"
                  width={10}
                  height={5}
                  icon={faChevronDown}
                />
              </span>
            </div>
          </div>
        </div>
        {showOptions && filteredOptions.length > 0 && (
          <div className="mt-2">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => addItem(option)}
                className="cursor-pointer p-2 hover:bg-gray-200 px-4 text-[18px]"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
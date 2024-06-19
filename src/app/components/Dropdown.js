"use client";
import { useState } from 'react';

const Dropdown = ({ options, label, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="capitalize block text-gray-700 text-[18px] font-semibold mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block appearance-none w-full bg-white border border-[#E4E5E8] hover:border-gray-600 p-[17px] pr-[18px] text-[14px] text-[#767F8C] rounded-[15px] leading-tight focus:outline-none focus:shadow-outline"
        >
          <option className='text-[14px] font-normal text-[#767F8C]' value="" disabled>Select...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
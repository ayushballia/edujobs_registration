import React from "react";

const Label = ({ title, children }) => (
  <div className="my-5 w-full">
    <label className="capitalize text-[16px] leading-[20px] font-semibold text-[#666666]">{title}</label>
    <div className="flex space-x-6 my-4 w-full">{children}</div>
    
  </div>
);

export default Label;
import React, { useState } from "react";
import {BsCaretDownFill, BsCaretUpFill} from "react-icons/bs";

type Props = {
options: string[];
onChange: (value: string) => void;
value?: string;
title: string;
};

const DropdownSelector: React.FC<Props> = ({ options, onChange, value, title }) => {
const [isOpen, setIsOpen] = useState(false);

return (
<div className="text-start mx-4 ">
<p className="font-md text-white">{title}</p>
<div className="z-0 ">
<button
className="flex justify-between w-[200px] z-0 p-2 h-10 bg-dropdown-bg rounded-md text-gray-200 border-2 border-dropdown-bg"
onClick={() => setIsOpen(!isOpen)}
>
<p className="my-auto self-center">{value ? value : "Select field"} </p>
{!isOpen ? <BsCaretDownFill className="my-auto "/> : <BsCaretUpFill className="my-auto "/>}
</button>
</div>
{isOpen && (
    <div className="bg-dropdown-bg rounded-md text-gray-200  border-2 border-dropdown-bg p-2 relative z-100 my-2">
      {options.map((option) => (
        <div
          className="px-2 rounded-sm hover:bg-gray-400 cursor-pointer"
          onClick={() => {
            onChange(option);
            setIsOpen(false);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )}
</div>
);
};

export default DropdownSelector;
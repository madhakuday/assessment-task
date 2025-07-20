"use client";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface IProps {
  label: string;
  options?: string[];
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export function CustomSelect({
  className,
  label,
  options = [],
  value = "",
  onChange,
}: IProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange?.(option);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-transparent hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <span>{value || label}</span>
        <BiChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && options.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

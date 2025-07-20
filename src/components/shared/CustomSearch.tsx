import React from "react";
import { BiMapPin } from "react-icons/bi";

interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomSearch = ({
  placeholder = "Bundesland, Ort oder Postleitzahl",
  value = "",
  onChange,
}: IProps) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-3 text-gray-400">
        <BiMapPin size={18} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value || ' ')}
        onFocus={(e) => onChange?.(e.target.value || ' ')}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default CustomSearch;

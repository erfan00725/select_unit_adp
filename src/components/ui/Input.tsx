import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  id?: string;
  required?: boolean;
  defaultValue?: string | number | readonly string[];
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  className = "",
  id,
  required = false,
  defaultValue,
  name,
  wrapperClassName,
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      {icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id={id}
        className={`input ${icon ? "pl-10!" : ""} ${className} w-full`}
        defaultValue={defaultValue}
        name={name}
      />
    </div>
  );
};

export default Input;

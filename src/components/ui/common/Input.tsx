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
  disabled?: boolean;
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
  disabled = false,
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
        placeholder={placeholder || "ورودی"}
        value={value}
        onChange={onChange}
        required={required}
        id={id}
        className={`input ${icon ? "pl-10!" : ""} ${className} w-full`}
        defaultValue={defaultValue}
        name={name}
        disabled={disabled}
        onWheel={(e) => e.currentTarget.blur()}
      />
    </div>
  );
};

export default Input;

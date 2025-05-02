"use client";

import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormInputProps, FormProps, InputDataType } from "@/types/Props";
import { SelectButton } from "./SelectButton";
import { CalenderFarsi } from "./CalenderFarsi";

const FormInput = ({
  name,
  type,
  defaultValue,
  icon,
  placeholder,
  required,
  title,
  onChange,
  value,
  SelectButtonProps,
}: FormInputProps) => {
  switch (type) {
    case "select":
      if (!SelectButtonProps) return;
      return (
        <SelectButton
          {...SelectButtonProps}
          onSave={(i) => {
            console.log(i);
            const data = SelectButtonProps.singleSelect
              ? i[0].id
              : i.map((i) => i.id);
            onChange && onChange(data);
          }}
        />
      );
    case "textarea":
      return (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder || ""}
          value={value || ""}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="input min-h-[100px]"
          required={required}
        />
      );
    case "date":
      return (
        <CalenderFarsi
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      );
    default:
      return (
        <Input
          type={type}
          placeholder={placeholder || ""}
          value={value?.toString() || ""}
          onChange={(e) => onChange && onChange(e.target.value)}
          icon={icon}
          id={name}
          required={required}
        />
      );
  }
};

const Form: React.FC<FormProps> = ({
  inputs = [],
  children,
  className = "",
  onSubmit,
  addText = "اضافه کردن",
  Header,
  useDefaultValues = false,
}) => {
  // Create a state object to store all input values
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Handle input changes
  const handleInputChange = (
    name: string,
    value: any,
    dataType: InputDataType = InputDataType.string
  ) => {
    let convertedValue = value;

    const isValueEmpty =
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "") ||
      value === "none";

    // Convert value based on dataType if specified
    if (dataType && !isValueEmpty) {
      switch (dataType) {
        case InputDataType.number:
          convertedValue = value === "" ? null : Number(value);
          break;
        case InputDataType.bool:
          convertedValue = Boolean(value);
          break;
        case InputDataType.date:
          convertedValue = value ? new Date(value) : null;
          break;
        case InputDataType.bigint:
          convertedValue = BigInt(value);
          break;
        // Add more type conversions as needed
        default:
          // Keep as string or original type
          break;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: !isValueEmpty ? convertedValue : null,
    }));
  };

  useEffect(() => {
    if (useDefaultValues) {
      const defaultValues: Record<string, any> = {};
      inputs.forEach((input) => {
        console.log(input.defaultValue);
        defaultValues[input.name] = input.defaultValue || "";
      });
      setFormData(defaultValues);
    } else {
      setFormData({});
    }
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div
      className={`max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-8 ${className}`}
    >
      {Header}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {inputs.map((input, index) => (
            <div
              className="pt-5 mb-5 border-t-1 border-gray-200 first-of-type:border-0 flex justify-between items-center w-full"
              key={index}
            >
              <label
                htmlFor={input.name}
                className="block text-sm font-medium text-gray-700 mb-1 min-w-[100px]"
              >
                {input.title}
                {input.required && <span className="text-red-500">*</span>}
              </label>
              {
                <FormInput
                  {...input}
                  value={formData[input.name]}
                  onChange={(value) =>
                    handleInputChange(input.name, value, input.dataType)
                  }
                />
              }
            </div>
          ))}
        </div>

        {children}

        <button type="submit" className="btn mt-10">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          {addText}
        </button>
      </form>
    </div>
  );
};

export default Form;

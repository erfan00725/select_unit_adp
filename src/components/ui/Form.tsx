"use client";

import React, { useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormProps } from "@/types/Props";

const Form: React.FC<FormProps> = ({
  inputs = [],
  children,
  className = "",
  onSubmit,
  addText = "Add",
  Header,
}) => {
  // Create a state object to store all input values
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Handle input changes
  const handleInputChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {input.title}
              </label>
              {input.type === "textarea" ? (
                <textarea
                  id={input.name}
                  name={input.name}
                  placeholder={input.placeholder || ""}
                  value={formData[input.name] || ""}
                  onChange={(e) =>
                    handleInputChange(input.name, e.target.value)
                  }
                  className="input min-h-[100px]"
                  required={input.required}
                />
              ) : (
                <Input
                  type={input.type}
                  placeholder={input.placeholder || ""}
                  value={formData[input.name] || ""}
                  onChange={(e) =>
                    handleInputChange(input.name, e.target.value)
                  }
                  icon={input.icon}
                  id={input.name}
                  required={input.required}
                />
              )}
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

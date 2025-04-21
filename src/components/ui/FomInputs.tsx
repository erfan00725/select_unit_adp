import { useEffect, useState } from "react";

export type InputValueType = Record<string, { active: boolean; value: any }>;

type Props = {
  configs: Array<{
    id: string;
    label: string;
    type: "select" | "number";
    name: string;
    options?: Array<{ value: any; label: string }>;
    required?: boolean;
    className?: string;
    canBeDisabled?: boolean;
  }>;
  onInputsChange?: (inputsValue: InputValueType) => void;
};

// Function to generate form inputs based on configuration
export const FormInputs = ({ configs, onInputsChange }: Props) => {
  const [inputsValue, setInputsValue] = useState<InputValueType>({});

  // Initialize input values and active states
  useEffect(() => {
    const initialValues: InputValueType = {};

    configs.forEach((config) => {
      initialValues[config.name] = {
        active: true,
        value: "",
      };
      // Initialize active state for inputs that can be disabled
      if (config.canBeDisabled) {
        initialValues[`${config.name}`].active = false; // Default to active
      }
    });

    setInputsValue((prev) => ({ ...prev, ...initialValues }));
  }, []);

  useEffect(() => {
    onInputsChange && onInputsChange(inputsValue);
  }, [inputsValue]);

  // Toggle input active state
  const toggleInputActive = (name: string) => {
    setInputsValue((prev) => ({
      ...prev,
      [`${name}`]: {
        ...prev[name],
        active: !prev[name].active,
      },
    }));
  };

  // Handle input value change
  const handleInputChange = (name: string, value: any) => {
    setInputsValue((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
      },
    }));
  };

  return (
    <div className="flex flex-wrap flex-row justify-start items-center space-x-15 my-10 mx-5 space-y-5">
      {configs.map((config) => {
        const isActive = config.canBeDisabled
          ? inputsValue[`${config.name}`]?.active ?? false
          : true;

        return (
          <div key={config.id} className="flex items-center">
            <div className="flex items-center">
              <label className="text-lg" htmlFor={config.id}>
                {config.label}
                {config.required && isActive && (
                  <span className="text-red-500">*</span>
                )}{" "}
                :
              </label>
              {config.type === "select" ? (
                <select
                  className={`ml-5 button text-lg ${config.className || ""} ${
                    !isActive ? "opacity-50" : ""
                  }`}
                  id={config.id}
                  name={config.name}
                  required={config.required && isActive}
                  value={(inputsValue[config.name]?.value as string) || ""}
                  onChange={(e) =>
                    handleInputChange(config.name, e.target.value)
                  }
                  disabled={!isActive}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {config.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={config.type}
                  className={`input ml-5 py-1! w-40 ${config.className || ""} ${
                    !isActive ? "opacity-50" : ""
                  }`}
                  id={config.id}
                  name={config.name}
                  required={config.required && isActive}
                  value={inputsValue[config.name]?.value || ""}
                  onChange={(e) =>
                    handleInputChange(config.name, e.target.value)
                  }
                  disabled={!isActive}
                />
              )}
            </div>
            {config.canBeDisabled && !config.required && (
              <div className="ml-2 flex items-center">
                <input
                  type="checkbox"
                  id={`${config.id}_toggle`}
                  checked={isActive}
                  onChange={() => toggleInputActive(config.name)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

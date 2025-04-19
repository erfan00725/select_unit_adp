import { useEffect, useState } from "react";

type Props = {
  configs: Array<{
    id: string;
    label: string;
    type: "select" | "number";
    name: string;
    value?: string | number;
    onChange?: (value: any) => void;
    options?: Array<{ value: any; label: string }>;
    required?: boolean;
    className?: string;
    canBeDisabled?: boolean; // New property to indicate if input can be disabled
  }>;
};

// Function to generate form inputs based on configuration
export const FormInputs = ({ configs }: Props) => {
  const [activeInputs, setActiveInputs] = useState<Record<string, boolean>>({});

  // Initialize active state for inputs that can be disabled
  useEffect(() => {
    const initialActiveState: Record<string, boolean> = {};
    configs.forEach((config) => {
      if (config.canBeDisabled && !(config.id in activeInputs)) {
        initialActiveState[config.id] = true; // Default to active
      }
    });
    if (Object.keys(initialActiveState).length > 0) {
      setActiveInputs((prev) => ({ ...prev, ...initialActiveState }));
    }
  }, [configs]);

  // Toggle input active state
  const toggleInputActive = (id: string) => {
    setActiveInputs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-wrap flex-row justify-start items-center space-x-15 my-10 mx-5 space-y-5">
      {configs.map((config) => {
        const isActive = config.canBeDisabled
          ? activeInputs[config.id] ?? true
          : true;

        return (
          <div key={config.id} className="flex items-center">
            <div className="flex items-center">
              <label className="text-lg" htmlFor={config.id}>
                {config.label} :
              </label>
              {config.type === "select" ? (
                <select
                  className={`ml-5 button text-lg ${config.className || ""} ${
                    !isActive ? "opacity-50" : ""
                  }`}
                  id={config.id}
                  name={config.name}
                  required={config.required && isActive}
                  value={config.value as string}
                  onChange={(e) =>
                    config.onChange && config.onChange(e.target.value)
                  }
                  disabled={!isActive}
                >
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
                  value={config.value}
                  onChange={(e) =>
                    config.onChange && config.onChange(e.target.value)
                  }
                  disabled={!isActive}
                />
              )}
            </div>
            {config.canBeDisabled && (
              <div className="ml-2 flex items-center">
                <input
                  type="checkbox"
                  id={`${config.id}_toggle`}
                  checked={isActive}
                  onChange={() => toggleInputActive(config.id)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={`${config.id}_toggle`}
                  className="ml-1 text-sm text-gray-600"
                >
                  Active
                </label>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

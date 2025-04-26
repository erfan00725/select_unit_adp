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

// تابعی برای تولید ورودی‌های فرم بر اساس پیکربندی
export const FormInputs = ({ configs, onInputsChange }: Props) => {
  const [inputsValue, setInputsValue] = useState<InputValueType>({});

  // مقداردهی اولیه مقادیر ورودی و وضعیت فعال بودن
  useEffect(() => {
    const initialValues: InputValueType = {};

    configs.forEach((config) => {
      initialValues[config.name] = {
        active: true,
        value: "",
      };
      // مقداردهی اولیه وضعیت فعال برای ورودی‌هایی که می‌توانند غیرفعال شوند
      if (config.canBeDisabled) {
        initialValues[`${config.name}`].active = false; // پیش‌فرض غیرفعال
      }
    });

    setInputsValue((prev) => ({ ...prev, ...initialValues }));
  }, []);

  useEffect(() => {
    onInputsChange && onInputsChange(inputsValue);
  }, [inputsValue]);

  // تغییر وضعیت فعال بودن ورودی
  const toggleInputActive = (name: string) => {
    setInputsValue((prev) => ({
      ...prev,
      [`${name}`]: {
        ...prev[name],
        active: !prev[name].active,
      },
    }));
  };

  // مدیریت تغییر مقدار ورودی
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
    <div className="space-y-4">
      {configs.map((config) => (
        <div key={config.id} className={config.className}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {config.label ? config.label : "برچسب"}
            {config.required && <span className="text-red-500">*</span>}
          </label>
          {config.canBeDisabled && (
            <button
              type="button"
              className="text-xs text-blue-600 underline mr-2"
              onClick={() => toggleInputActive(config.name)}
            >
              {inputsValue[config.name]?.active ? "غیرفعال کردن" : "فعال کردن"}
            </button>
          )}
          {config.type === "select" ? (
            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={inputsValue[config.name]?.value || ""}
              onChange={(e) => handleInputChange(config.name, e.target.value)}
              disabled={
                config.canBeDisabled && !inputsValue[config.name]?.active
              }
            >
              <option value="">انتخاب کنید...</option>
              {config.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label ? option.label : "گزینه"}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={config.type}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={inputsValue[config.name]?.value || ""}
              onChange={(e) => handleInputChange(config.name, e.target.value)}
              placeholder={
                config.label ? `لطفاً ${config.label} را وارد کنید` : "ورودی"
              }
              disabled={
                config.canBeDisabled && !inputsValue[config.name]?.active
              }
              required={config.required}
            />
          )}
        </div>
      ))}
    </div>
  );
};

import clsx from "clsx";
import { useEffect, useState } from "react";

export type InputValueType = Record<
  string,
  { active: boolean; value: string | number }
>;

type Props = {
  configs: Array<{
    id: string;
    label: string;
    type: "select" | "number";
    name: string;
    options?: Array<{ value: string; label: string }>;
    required?: boolean;
    className?: string;
    canBeDisabled?: boolean;
  }>;
  initialValues?: InputValueType; // Added for edit mode
  onInputsChange?: (inputsValue: InputValueType) => void;
};

// تابعی برای تولید ورودی‌های فرم بر اساس پیکربندی
export const FormInputs = ({
  configs,
  initialValues,
  onInputsChange,
}: Props) => {
  const [inputsValue, setInputsValue] = useState<InputValueType>({});

  // مقداردهی اولیه مقادیر ورودی و وضعیت فعال بودن
  useEffect(() => {
    const defaultValues: InputValueType = {};

    configs.forEach((config) => {
      defaultValues[config.name] = {
        active: true,
        value: "",
      };
      // مقداردهی اولیه وضعیت فعال برای ورودی‌هایی که می‌توانند غیرفعال شوند
      if (config.canBeDisabled) {
        defaultValues[`${config.name}`].active = false; // پیش‌فرض غیرفعال
      }
    });

    // If initialValues are provided (edit mode), merge them with defaults
    if (initialValues) {
      // For each initialValue, ensure it has active status
      Object.keys(initialValues).forEach((key) => {
        if (defaultValues[key]) {
          // If the field can be disabled, set active to true when there's a value
          const config = configs.find((c) => c.name === key);
          if (config?.canBeDisabled && initialValues[key]?.value) {
            initialValues[key].active = true;
          }
          // Otherwise keep the default active status
          else if (!initialValues[key]?.hasOwnProperty("active")) {
            initialValues[key].active = defaultValues[key].active;
          }
        }
      });
      console.log(initialValues);

      setInputsValue({ ...defaultValues, ...initialValues });
    } else {
      setInputsValue(defaultValues);
    }
  }, []);

  useEffect(() => {
    onInputsChange && onInputsChange(inputsValue);
    // console.log(inputsValue);
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
    <div className="space-x-5 space-y-5 flex flex-row flex-wrap w-full mb-7">
      {configs.map((config) => (
        <div key={config.id} className={config.className}>
          <label className="block font-medium text-gray-700 mb-1 ">
            {config.label ? config.label : "برچسب"}
            {config.required && <span className="text-red-500">*</span>}
          </label>
          {config.type === "select" ? (
            <select
              className={clsx("border border-gray-300 rounded-md px-3 py-2", {
                "text-gray-400": !inputsValue[config.name]?.active,
              })}
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
              className={clsx("border border-gray-300 rounded-md px-3 py-2", {
                "text-gray-400": !inputsValue[config.name]?.active,
              })}
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
          {config.canBeDisabled && (
            <input
              type="checkbox"
              className="w-4 h-4 mr-2"
              onClick={() => toggleInputActive(config.name)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

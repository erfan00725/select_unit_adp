import Loading from "@/components/common/Loading";
import {
  InputValueType,
  SelectUnitFormConfig,
  SelectUnitFormInpursProps,
} from "@/types/Props";
import clsx from "clsx";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

// تابعی برای تولید ورودی‌های فرم بر اساس پیکربندی
export const FormInputs = ({
  configs,
  initialValues,
  onInputsChange,
}: SelectUnitFormInpursProps) => {
  const [inputsValue, setInputsValue] = useState<InputValueType>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setInputsValue({ ...defaultValues, ...initialValues });
    } else {
      setInputsValue(defaultValues);
    }
  }, [initialValues]);

  useEffect(() => {
    setIsLoading(false);
    onInputsChange && onInputsChange(inputsValue);
  }, [inputsValue]);

  const toggleInputActive = (name: string) => {
    setInputsValue((prev) => ({
      ...prev,
      [`${name}`]: {
        ...prev[name],
        active: !prev[name].active,
      },
    }));
  };

  const handleInputChange = (name: string, value: any) => {
    setInputsValue((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
      },
    }));
  };

  const Inputs = (config: SelectUnitFormConfig) => {
    switch (config.type) {
      case "select":
        return (
          <select
            className={clsx("border border-gray-300 rounded-md px-3 py-2", {
              "text-gray-400": !inputsValue[config.name]?.active,
            })}
            value={inputsValue[config.name]?.value || ""}
            onChange={(e) => handleInputChange(config.name, e.target.value)}
            disabled={config.canBeDisabled && !inputsValue[config.name]?.active}
          >
            <option value="">انتخاب کنید...</option>
            {config.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label ? option.label : "گزینه"}
              </option>
            ))}
          </select>
        );
      case "price":
        return (
          <CurrencyInput
            className={clsx("border border-gray-300 rounded-md px-3 py-2", {
              "text-gray-400": !inputsValue[config.name]?.active,
            })}
            value={inputsValue[config.name]?.value || ""}
            onValueChange={(value: string | undefined, name?: string) =>
              handleInputChange(config.name, value)
            }
            suffix="ریال"
            placeholder={
              config.label ? `لطفاً ${config.label} را وارد کنید` : ""
            }
            disabled={config.canBeDisabled && !inputsValue[config.name]?.active}
            required={config.required}
            allowNegativeValue={false}
            allowDecimals={false}
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            className={clsx("border border-gray-300 rounded-md w-5 h-5", {
              "text-gray-400": !inputsValue[config.name]?.active,
            })}
            value={inputsValue[config.name]?.value || ""}
            onChange={(e) => {
              handleInputChange(config.name, e.target.checked ? 1 : 0);
            }}
            checked={!!inputsValue[config.name]?.value}
            placeholder={
              config.label ? `لطفاً ${config.label} را وارد کنید` : ""
            }
            disabled={config.canBeDisabled && !inputsValue[config.name]?.active}
            required={config.required}
          />
        );

      default:
        return (
          <input
            type={config.type}
            className={clsx("border border-gray-300 rounded-md px-3 py-2", {
              "text-gray-400": !inputsValue[config.name]?.active,
            })}
            value={inputsValue[config.name]?.value || ""}
            onChange={(e) => handleInputChange(config.name, e.target.value)}
            placeholder={
              config.label ? `لطفاً ${config.label} را وارد کنید` : ""
            }
            disabled={config.canBeDisabled && !inputsValue[config.name]?.active}
            required={config.required}
          />
        );
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="space-x-5 space-y-5 flex flex-row flex-wrap w-full mb-7">
      {configs.map((config) => (
        <div key={config.id} className={config.className}>
          <label className="block font-medium text-gray-700 mb-1 ">
            {config.label ? config.label : "برچسب"}
            {config.required && <span className="text-red-500">*</span>}
          </label>
          {Inputs(config)}
          {config.canBeDisabled && (
            <input
              type="checkbox"
              className="w-4 h-4 mr-2"
              onClick={() => toggleInputActive(config.name)}
              checked={!!inputsValue[config.name]?.active}
              readOnly
            />
          )}
        </div>
      ))}
    </div>
  );
};

"use client";
import getFarsiDate from "@/lib/getFarsiDate";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, CalendarProvider } from "zaman";

type Props = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  title?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
};

export const CalenderFarsi = ({
  defaultValue,
  onChange,
  title,
  name,
  disabled,
  required,
}: Props) => {
  const [isShow, setIsShow] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string | undefined>(defaultValue);

  // Add event listener to prevent form submission
  useEffect(() => {
    if (isShow && calendarRef.current) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          calendarRef.current &&
          !calendarRef.current.contains(event.target as Node)
        ) {
          setIsShow(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      // Find all buttons inside the calendar
      const buttons = calendarRef.current.querySelectorAll("button");

      // Add event listeners to prevent form submission
      const preventSubmit = (e: Event) => {
        e.preventDefault();
      };

      buttons.forEach((button) => {
        button.setAttribute("type", "button");
        button.addEventListener("click", preventSubmit, true);
      });

      // Cleanup
      return () => {
        buttons.forEach((button) => {
          button.removeEventListener("click", preventSubmit, true);
        });
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isShow]);

  const onChangeHandler = (value: Date) => {
    onChange && onChange(value.toISOString());
    setValue(value.toISOString());
    setIsShow(false);
  };

  const showDate = () => {
    if (!value) {
      return null;
    }
    return getFarsiDate(value);
  };

  return (
    <div className="relative">
      <button
        className={`button ${disabled ? "hover:bg-white!" : ""}`}
        onClick={() => setIsShow((prev) => !prev)}
        type="button"
        disabled={disabled}
      >
        {showDate() || title || "انتخاب تاریخ"}
      </button>
      {isShow && (
        <div
          ref={calendarRef}
          className={`${disabled ? "pointer-events-none" : ""}`}
        >
          <CalendarProvider
            locale="fa"
            round="x2"
            direction="rtl"
            accentColor="#5856d6"
          >
            <Calendar
              className="absolute! top-0 left-4 z-30 rtl"
              defaultValue={defaultValue ? new Date(defaultValue) : undefined}
              onChange={({ value }) => onChangeHandler(value)}
              weekends={[6]}
            />
          </CalendarProvider>
        </div>
      )}
      <input
        type="hidden"
        name={name}
        id={name}
        value={value || ""}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};

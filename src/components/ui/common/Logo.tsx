import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`text-indigo-600 font-extrabold text-1xl ${className}`}>
      <span className="inline-block text-center">
        مدرسه
        <br />
        راه دور البرز
      </span>
    </div>
  );
};

export default Logo;

import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`text-indigo-600 font-bold text-3xl ${className}`}>
      <span className="inline-block">لوگو</span>
    </div>
  );
};

export default Logo;

import React from "react";

const sizeClasses = {
  small: "text-sm px-3 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-5 py-3",
};

const variantClasses = {
  neutral: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  // Add more if needed
};

const typeClasses = {
  plain: "border border-transparent shadow-none",
  outlined: "border border-gray-300",
  filled: "", // default
};

export const Button = ({
  variant = "neutral",
  type = "plain",
  dsVersion = "1.0", // currently unused but reserved
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded transition font-medium
        ${sizeClasses[size] || ""}
        ${variantClasses[variant] || ""}
        ${typeClasses[type] || ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
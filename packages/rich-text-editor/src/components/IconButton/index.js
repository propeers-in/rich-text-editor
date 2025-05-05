import React from "react";

const sizeClasses = {
  small: "p-1",
  medium: "p-2",
  large: "p-3",
};

const variantClasses = {
  neutral: "text-gray-700 hover:bg-gray-200",
  primary: "text-white bg-blue-600 hover:bg-blue-700",
  danger: "text-white bg-red-600 hover:bg-red-700",
  // Add more if needed
};

const IconButton = ({
  variant = "neutral",
  type = "plain", // could be used to change style like outlined, plain, etc.
  ds = "1.0",
  icon,
  size = "medium",
  tooltip,
  disabled = false,
  onClick,
  "aria-label": ariaLabel,
  isActivated
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded transition flex items-center justify-center ${
        sizeClasses[size] || ""
      } ${variantClasses[variant] || ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-label={ariaLabel}
      title={tooltip}
    >
      {icon}
    </button>
  );
};

export default IconButton
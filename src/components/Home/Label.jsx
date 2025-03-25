import React from "react";

export   default function Label({ children, className = "", ...props }) {
  return (
    <label className={`text-gray-700 font-medium ${className}`} {...props}>
      {children}
    </label>
  );
}

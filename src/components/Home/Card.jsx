import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md p-4 rounded ${className}`}>
      {children}
    </div>
  );
}
export function CardHeader({ children, className = "" }) {
  return (
    <div className={`border-b p-2 font-semibold ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
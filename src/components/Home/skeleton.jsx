import * as React from "react";

export function Skeleton({ className }) {
  return <div className={`animate-pulse bg-gray-300 ${className}`} />;
}

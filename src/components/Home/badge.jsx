import * as React from "react";

export function Badge({ children, className, ...props }) {
  return <span className={`px-2 py-1 rounded text-white text-xs ${className}`} {...props}>{children}</span>;
}

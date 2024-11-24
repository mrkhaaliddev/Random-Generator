import React from "react";

export default function Wrapper({ children, className }: any) {
  return (
    <div className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

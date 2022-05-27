import React from "react";

export const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="max-w-[1200px] w-full">{children}</div>
    </div>
  );
};

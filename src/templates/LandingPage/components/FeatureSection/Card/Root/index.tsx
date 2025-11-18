import React, { ComponentProps } from "react";

export interface RootProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between p-8 bg-gray-500 rounded-md md:flex-row">
      {children}
    </div>
  );
};

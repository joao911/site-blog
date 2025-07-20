import React, { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Root: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div
      className="flex flex-col w-full gap-4 p-4 bg-gray-800 border border-gray-700 rounded-md"
      {...rest}
    >
      {children}
    </div>
  );
};

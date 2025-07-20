import React, { ComponentProps } from "react";

interface RootProps extends ComponentProps<"div"> {
  color: "blue-300" | "cyan-300";
  children: React.ReactNode;
}

const colorMap = {
  "blue-300": "bg-blue-300",
  "cyan-300": "bg-cyan-300",
};
export const Root: React.FC<RootProps> = ({ color, children, ...rest }) => {
  return (
    <div className={`rounded-md p-5 ${colorMap[color]}`} {...rest}>
      {children}
    </div>
  );
};

import React, { ComponentProps } from "react";

interface IconProps extends ComponentProps<"div"> {
  color: "blue-400" | "cyan-200";
  children: React.ReactNode;
}

const colorMap = {
  "blue-400": "bg-blue-400",
  "cyan-200": "bg-cyan-200",
};

export const Icon: React.FC<IconProps> = ({ color, children, ...rest }) => {
  return (
    <div className={`rounded-md p-2 w-fit ${colorMap[color]}`} {...rest}>
      {children}
    </div>
  );
};

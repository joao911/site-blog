import React, { ComponentProps } from "react";

interface HeaderProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div>{children}</div>;
};

import React from "react";

interface ContainerCardProps {
  children: React.ReactNode;
}

export const ContainerCard: React.FC<ContainerCardProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-auto ">{children}</div>
  );
};

import React from "react";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="mt-4 font-bold text-gray-100 text-heading-lg">{title}</h1>
  );
};

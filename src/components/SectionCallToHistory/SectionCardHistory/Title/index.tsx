import React, { ComponentProps } from "react";

interface TitleProps extends ComponentProps<"h1"> {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title, ...rest }) => {
  return (
    <h1 className="mt-4 font-bold text-gray-100 text-heading-sm" {...rest}>
      {title}
    </h1>
  );
};

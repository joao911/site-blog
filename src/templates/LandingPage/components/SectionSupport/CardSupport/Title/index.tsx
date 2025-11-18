import React, { ComponentProps } from "react";

export interface TitleProps extends ComponentProps<"p"> {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title, ...rest }) => {
  return (
    <p className="text-gray-200" {...rest}>
      {title}
    </p>
  );
};

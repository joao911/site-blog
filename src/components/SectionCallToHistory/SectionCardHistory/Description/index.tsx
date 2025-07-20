import React, { ComponentProps } from "react";

interface DescriptionProps extends ComponentProps<"p"> {
  description: string;
}

export const Description: React.FC<DescriptionProps> = ({
  description,
  ...rest
}) => {
  return (
    <p className="text-gray-200 text-body-sm" {...rest}>
      {description}
    </p>
  );
};

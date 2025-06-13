import React, { ComponentProps } from "react";

interface CarFeatureProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export const CarFeature: React.FC<CarFeatureProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col p-5 bg-gray-500 rounded-sm md:flex-row">
      <div>
        <div className="p-1 mb-4 bg-blue-400 rounded-sm w-fit">
          <p className="text-blue-200 uppercase">{description}</p>
        </div>

        <h1 className="text-gray-100 text-heading-lg">{title}</h1>
      </div>

      {children}
    </div>
  );
};

import React from "react";

interface DescriptionProps {
  description: string;
}

export const DesCription: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="p-1 bg-blue-200 rounded-sm w-fit">
      <span className="text-blue-400 uppercase"> {description}</span>
    </div>
  );
};

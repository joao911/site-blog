import React, { ComponentProps } from "react";
import Image from "next/image";

interface PositionInCompanyProps extends ComponentProps<"div"> {
  image: string;
  name: string;
  company: string;
}

export const PositionInCompany: React.FC<PositionInCompanyProps> = ({
  image,
  name,
  company,
  ...rest
}) => {
  return (
    <div className="flex items-center gap-4 mt-4 " {...rest}>
      <Image
        src={image}
        alt="image-profile"
        className="border border-blue-200 rounded-full"
        width={36}
        height={36}
      />
      <div className="flex flex-col">
        <span className="font-bold text-gray-200">{name}</span>
        <span className="text-gray-300">{company}</span>
      </div>
    </div>
  );
};

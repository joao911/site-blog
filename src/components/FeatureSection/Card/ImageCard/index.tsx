import Image from "next/image";
import React from "react";

// import { Container } from './styles';

export const ImageCard: React.FC = () => {
  return (
    <Image src="/image-feature.png" alt="mockup" width={500} height={500} />
  );
};

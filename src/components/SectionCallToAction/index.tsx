import React from "react";
import { MoveRight, Store } from "lucide-react";

import { Button } from "../ui/button";

// import { Container } from './styles';

export const SectionCallToAction: React.FC = () => {
  return (
    <div className="relative  bg-[url('/background.png')] h-[20rem]  flex flex-col items-center justify-center mt-14 gap-6 ">
      <div className="absolute bottom-[-1.5rem] flex items-center justify-center p-4 rounded-full bg-cyan-300">
        <Store className="w-6 h-6 text-cyan-100" />
      </div>
      <h1 className="font-bold text-center text-gray-100 text-heading-lg">
        Crie uma Loja online e inicie <br /> suas venda ainda hoje
      </h1>
      <Button className="rounded-full w-fit">
        Criar loja grátis
        <MoveRight />
      </Button>
    </div>
  );
};

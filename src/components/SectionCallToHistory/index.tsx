import React from "react";
import { SectionCardHistory } from "./SectionCardHistory";
import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SectionCallToHistory: React.FC = () => {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center w-full  mt-40">
      <div className="container py-20">
        <h1 className="font-bold text-center text-gray-100 text-heading-lg">
          A sua loja de afiliados, simples,
          <br /> do jeito que deveria ser
        </h1>
        <div className="flex flex-col items-center justify-center gap-6 mt-10 md:flex-row">
          <SectionCardHistory.Root color="blue-300">
            <SectionCardHistory.Icon color="blue-400">
              <PaintbrushVertical className="w-6 h-6 text-gray-100" />
            </SectionCardHistory.Icon>
            <SectionCardHistory.Title title="Adicione sua logo, favicon, cores no seu catalogo e tenha tudo com sua cara" />
          </SectionCardHistory.Root>
          <SectionCardHistory.Root color="cyan-300">
            <SectionCardHistory.Icon color="cyan-200">
              <Store className="w-6 h-6 text-gray-100" />
            </SectionCardHistory.Icon>
            <SectionCardHistory.Title title="Adicione sua logo, favicon, cores no seu catalogo e tenha tudo com sua cara" />
          </SectionCardHistory.Root>
          <SectionCardHistory.Root color="blue-300">
            <SectionCardHistory.Icon color="blue-400">
              <HeartHandshake className="w-6 h-6 text-gray-100" />
            </SectionCardHistory.Icon>
            <SectionCardHistory.Title title="Adicione sua logo, favicon, cores no seu catalogo e tenha tudo com sua cara" />
          </SectionCardHistory.Root>
        </div>
      </div>
    </div>
  );
};

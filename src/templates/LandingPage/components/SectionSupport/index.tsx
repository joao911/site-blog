import React from "react";
import { CardSupport } from "./CardSupport";

export const SectionSupport: React.FC = () => {
  return (
    <div className="container mt-36">
      <h1 className="font-bold text-center text-gray-100 text-heading-lg">
        Quem utiliza aprova
      </h1>
      <div className="flex flex-col gap-4 mt-8 md:flex-row">
        <CardSupport.Root>
          <CardSupport.Title
            title="Criar minha loja com o site.set foi a melhor
           decisão para o meu negócio. A plataforma é super intuitiva, e consegui
            colocar meus produtos à venda em poucos minutos. A"
          />
          <CardSupport.PositionInCompany
            image="https://avatars.githubusercontent.com/joao911"
            name="Annette Bones"
            company="CEO na Anne Corp"
          />
        </CardSupport.Root>
        <CardSupport.Root>
          <CardSupport.Title
            title="Transformar minha ideia em uma loja online foi fácil e rápido.
             Adorei as opções de personalização e a simplicidade para gerenciar os
              pedidos. Já vejo meus produtos alcançando mais pessoas!"
          />
          <CardSupport.PositionInCompany
            image="https://avatars.githubusercontent.com/joao911"
            name="Jacob Jones"
            company="CEO na JJ Org"
          />
        </CardSupport.Root>
      </div>
    </div>
  );
};

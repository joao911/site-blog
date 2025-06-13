import React from "react";
import { CarFeature } from "../CarFeature";

// import { Container } from './styles';

export const FeatureSection: React.FC = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-4 md:flex-row">
        <CarFeature
          title="Crie um catálogo de produtos online em poucos minutos"
          description="simples"
        />
        <CarFeature
          title="Venda para seu público através de uma plataforma única"
          description="prático"
        />
      </div>
    </section>
  );
};

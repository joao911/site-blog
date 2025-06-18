import React from "react";
import { Card } from "./Card";
import { Button } from "../ui/button";
import { ArrowBigRight } from "lucide-react";

// import { Container } from './styles';

export const FeatureSection: React.FC = () => {
  return (
    <div className="container flex flex-col gap-4">
      <div className="flex gap-4 ">
        <Card.Root>
          <Card.ContainerCard>
            <Card.DesCription description="Simples" />
            <Card.Title title="Crie um catálogo de produtos online em poucos minutos" />
          </Card.ContainerCard>
        </Card.Root>
        <Card.Root>
          <Card.ContainerCard>
            <Card.DesCription description="prático" />
            <Card.Title title="Venda para seu público através de uma plataforma única" />
          </Card.ContainerCard>
        </Card.Root>
      </div>
      <Card.Root>
        <Card.ContainerCard>
          <Card.Header>
            <Card.DesCription description="prático" />
            <Card.Title title="Venda para seu público através de uma plataforma única" />
          </Card.Header>
          <Button className="rounded-full w-fit">
            Criar loja grátis <ArrowBigRight />
          </Button>
        </Card.ContainerCard>
        <Card.ImageCard />
      </Card.Root>
    </div>
  );
};

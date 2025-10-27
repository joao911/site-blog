import React from "react";
import { Card } from "./Card";
import { Button } from "../ui/button";
import { ArrowBigRight } from "lucide-react";

export const FeatureSection: React.FC = () => {
  return (
    <div className="container flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row ">
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
          <Button className="hidden rounded-full w-fit md:block">
            Criar loja grátis <ArrowBigRight />
          </Button>
        </Card.ContainerCard>
        <Card.ImageCard />
        <Button className="w-full rounded-full md:hidden">
          Criar loja grátis <ArrowBigRight />
        </Button>
      </Card.Root>
    </div>
  );
};

import React from "react";
import Link from "next/link";
import { Button } from "../../../ui/button";
import { ActiveLink } from "../../../ActiveLink";
import { Logo } from "../../../Logo";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Inicio</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

import { Logo } from "@/components/Logo";
import Link from "next/link";
import React from "react";

// import { Container } from './styles';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 py-8 md:flex-row">
          <Logo />
          <nav className="flex flex-col items-center gap-4 text-sm text-blue-100 md:flex-row">
            <Link href="/" className="hover:text-blue-200">
              Termos de uso
            </Link>
            <Link href="/" className="hover:text-blue-200">
              Politicas de privacidade
            </Link>
            <Link href="/" className="hover:text-blue-200">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

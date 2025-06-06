import React from "react";
import { Inter } from "next/font/google";

import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`${inter.className} relative flex flex-col min-h-screen bg-black dark`}
    >
      <Header />
      <main className="flex flex-col flex-1 mb-12">{children}</main>
      <Footer />
    </div>
  );
};

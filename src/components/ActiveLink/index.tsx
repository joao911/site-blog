"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}
export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const linkPath = (typeof href === "string" ? href : href.pathname) || "";
  const pathName = usePathname();

  const isActive =
    pathName === linkPath || pathName?.startsWith(`${linkPath}/`);
  return (
    <Link
      href={`${href}`}
      className={cn(
        " text-action-sm transition-colors hover:text-blue-200 ",
        isActive ? "text-blue-200" : "text-gray-100"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

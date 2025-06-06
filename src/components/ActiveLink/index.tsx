import React from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}
export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  href,
  ...rest
}) => {
  const router = useRouter();
  const isCurrentPath = router.asPath === href || router.asPath === rest.as;
  return (
    <Link
      href={`${href}`}
      className={cn(
        " text-action-sm transition-colors hover:text-blue-200 ",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
};

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <>
      {/* <Link href="/"> */}
      <a href="/">
        <Image src="/logo.svg" alt="logo do site" width={100} height={100} />
      </a>
      {/* </Link> */}
    </>
  );
};

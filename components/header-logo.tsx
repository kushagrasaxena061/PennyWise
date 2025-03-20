import Link from "next/link";
import Image from "next/image";
import React from "react";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className=" items-center hidden lg:flex">
        <Image src="/Pennywise.jpeg" alt=" Main Logo" height={64} width={64} />
        
      </div>
    </Link>
  );
};

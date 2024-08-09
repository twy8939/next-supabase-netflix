"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/"}>
        <Image
          src="/images/tmdbflix_logo.png"
          alt="Netflix Logo"
          width="50"
          height="30"
          className="!w-20 !h-auto"
        />
      </Link>
    </div>
  );
}

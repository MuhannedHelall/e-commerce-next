"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={120}
      height={30}
      onClick={() => router.push("/")}
      className={`cursor-pointer ${className}`}
    />
  );
}

export default Logo;

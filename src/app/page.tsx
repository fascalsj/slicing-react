"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/login"); // 👈 replace with your route
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <div className="flex flex-col h-screen">
      <div className="h-9/10 flex item-center justify-center">
        <Image
          src="/img/UIX-Class-Square.svg"
          alt="Next.js logo"
          width={0}
          height={0}
          style={{ width: "50vw", height: "auto" }}
          priority
        />
      </div>
      <div className="h-1/10 flex item-center justify-center">
        <div className="flex items-center justify-center text-[14px] text-[#999EA1] font-semibold">
        ©2022 NINTREA.LIVE
      </div>
      </div>
    </div>
  );
}
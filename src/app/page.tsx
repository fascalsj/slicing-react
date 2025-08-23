"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true); // start fade out
      setTimeout(() => {
        router.push("/login"); // navigate after fade out
      }, 500); // match this to your CSS transition duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className={`flex flex-col h-screen transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="h-9/10 flex items-center justify-center">
        <Image
          src="/img/UIX-Class-Square.svg"
          alt="Next.js logo"
          width={0}
          height={0}
          style={{ width: "50vw", height: "auto" }}
          priority
        />
      </div>
      <div className="h-1/10 flex items-center justify-center">
        <div className="flex items-center justify-center text-[14px] text-[#999EA1] font-semibold">
          ©2022 NINTREA.LIVE
        </div>
      </div>
    </div>
  );
}

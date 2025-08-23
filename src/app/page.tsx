"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./common/logo";

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
      className={[
        "flex",
        "flex-col",
        "h-screen",
        "transition-opacity",
        "duration-500",
        isTransitioning ? "opacity-0" : "opacity-100"
      ].join(" ")}
    >

      <Logo logoWidth="w-[50vw]" heightObject="h-9/10"></Logo>

      <div className="h-1/10 flex items-center justify-center">
        <div className="flex items-center justify-center text-[14px] text-[#999EA1] font-semibold">
          ©2022 NINTREA.LIVE
        </div>
      </div>
    </div>
  );
}

// src/app/page.tsx

import Index from "@/components/Dashboard/Index";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Intelliphy AI",
  description: "Intelliphy",
};

export default function Home() {
  return (
    <div className="absolute flex h-screen w-full items-center justify-center bg-[#bbc4d5] left-0 top-0 ">
      <div className="flex h-full w-full relative items-center justify-center">
        <Image 
          src={"/images/splash.png"}
          alt="Logo Icon" 
          width={1200}
          height={800}
          style={{width: '100%', height:'100%'}}    
        />
        <div className="absolute left-1/2 top-1/2 mx-auto flex h-80 w-80 flex-col items-center justify-between rounded-[10px] bg-white py-10 text-center shadow-3  transform -translate-x-1/2 -translate-y-1/2">
          <Index />
        </div>
      </div>
    </div>
  );
}

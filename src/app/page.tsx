// src/app/page.tsx

import Index from "@/components/Dashboard/Index";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yotta Platform",
  description: "YottaLib",
};

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto flex h-100 w-100 flex-col items-center justify-between rounded-[10px] bg-white py-20 text-center shadow-3">
        <Image
          className="m-4"
          src="/images/ai-explorer/icon-meta.png"
          alt="Logo"
          width={50}
          height={32}
        />
        <Index />
      </div>
    </div>
  );
}

// src/app/page.tsx

import Login from "@/components/Login";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AiOps",
  description: "Rebranding Enterprise solutions",
};

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#B2BAD6] ">
      <Image
        src={"/images/splash.png"}
        alt="Logo"
        width={1000}
        height={1000}
        // fill
        className="absolute rounded-full  object-cover"
      />
      <div className="relative flex items-center justify-center rounded-[16px] bg-white p-10 xsm:p-12">
        <Login />
      </div>
    </div>
  );
}

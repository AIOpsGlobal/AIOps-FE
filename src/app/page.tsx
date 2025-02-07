// src/app/page.tsx

import Login from "@/components/Login";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#B2BAD6] ">
      {/* <div className="absolute h-[37vw] w-[35vw]  rounded-full"> */}
      <Image
        src={"/images/login_splash.png"}
        alt="Logo"
        fill
        className="absolute object-cover"
      />
      {/* </div> */}
      <div className="relative flex items-center justify-center rounded-[16px] bg-white p-10 xsm:p-12">
        <Login />
      </div>
    </div>
  );
}

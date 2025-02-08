// src/app/page.tsx

import Login from "@/components/Login";
import React from "react";
import Image from "next/image";
import splash from "../../public/images/login_splashs.png";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#B2BAD6] ">
      <div className="absolute h-[48vw] w-[55vw]">
        <Image src={splash} alt="Logo" fill className=" " />
      </div>
      <div className="relative flex items-center justify-center rounded-[16px] bg-white p-10 xsm:p-12">
        <Login />
      </div>
    </div>
  );
}

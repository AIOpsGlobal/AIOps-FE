"use client";
import Image from "next/image";
import React from "react";
import logo_half from "../../../public/images/logo/logo_half_gray.png";
import logo_half_black from "../../../public/images/logo/logo_half_black.png";

const RequestAccess = ({
  setShowModal,
}: {
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}) => {
  return (
    <div className="justify-content-center flex flex-col items-center gap-3 text-center">
      <div className="relative h-[65px] w-[55px]">
        <Image
          src={logo_half}
          alt="Logo"
          fill
          className="object-contain dark:hidden"
        />
        <Image
          fill
          src={logo_half_black}
          alt="Logo"
          className="hidden object-contain dark:block"
        />
      </div>
      <p className="text-bold max-w-3xl text-base">
        {
          "We're currently testing our latest features, and we'd love for you to join us. If you're interested in Instances, sign up for the waitlist, and you'll be among the first to get access. We'll keep you updated and reach out as soon as it's available. Thanks for your support!"
        }
      </p>

      <button
        className="mt-2 rounded-[5px] bg-[#0000FE] px-10 py-2 text-white lg:px-8 xl:px-10"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Request Access
      </button>
    </div>
  );
};

export default RequestAccess;

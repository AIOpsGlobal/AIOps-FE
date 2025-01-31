"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import MetamaskSvg from "@/components/MetamaskSvg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
const queryClient = new QueryClient();

const Home: NextPage = () => {
  const { open } = useWeb3Modal();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      router.push("instances");
    }
  }, []);

  const onConnect = () => {
    open?.();
  };

  return (
    <div className="w-[250px]">
      <QueryClientProvider client={queryClient}>
        {/* <appkit-button /> */}
        <div className="flex h-full w-full flex-col items-center justify-center space-y-5">
          <Image 
              src="/images/login-icon.jpg" 
              alt="Logo Icon" 
              width={50} // Set the desired width
              height={50} // Set the desired height
              className="text-black" // You can still apply classes
            />
          <p className="text-[26px] text-center font-bold text-[#313131]">Welcome</p>
          <p className="text-[15px] text-center"> Connect your wallet <br/> to continue to intelliphy app</p>
          <button
            className="flex w-full items-center justify-center rounded-lg border border-[#F7FF98] bg-[#0100fb] py-2 transition-all duration-300 ease-in-out hover:bg-[#004cff] hover:text-white"
            onClick={onConnect}
          >            
            <div className="SpaceMono w-full text-[16px] font-bold leading-7 text-white transition-all duration-300 ease-in-out hover:text-white sm:text-[16px]">
              Connect Wallet
            </div>
          </button>
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default Home;

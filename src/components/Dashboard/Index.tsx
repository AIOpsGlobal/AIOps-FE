"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import MetamaskSvg from "@/components/MetamaskSvg";
import { useWeb3Modal } from "@web3modal/wagmi/react";

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
    <div className="w-[200px]">
      <QueryClientProvider client={queryClient}>
        {/* <appkit-button /> */}
        <div className="mt-6 flex w-full flex-col items-center gap-3">
          <button
            className="group flex w-full items-center justify-center gap-2 rounded-lg border border-[#F7FF98] bg-[#F7FF98] py-[10px] transition-all duration-300 ease-in-out hover:bg-[#262626] hover:text-white"
            onClick={onConnect}
          >
            <MetamaskSvg />
            <div className="SpaceMono text-[16px] font-bold leading-7 text-[#1C1C1C] transition-all duration-300 ease-in-out group-hover:text-[#F7FF98] sm:text-[16px]">
              Connect Wallet
            </div>
          </button>
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default Home;

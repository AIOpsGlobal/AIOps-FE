"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./AppProvider";

const queryClient = new QueryClient();

const projectId =
  process.env.NEXT_PUBLIC_INFURA_ID || "cd3cc4d280e358f5e9be96987a8aca89";
if (!projectId) {
  throw new Error("VITE_PROJECT_ID is not set");
}

const metadata = {
  name: "AIOps - Building a Global DeOS to Redefine AI Workload Orchestration.",
  description:
    "At AIOps, we're transforming this landscape by creating the first decentralized GPU computing network. By connecting unused GPU power worldwide, we reduce AI computing costs by 70% while enabling GPU owners to earn from their idle resources.",

  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [sepolia] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            {/* <!-- ===== Page Wrapper Star ===== --> */}
            <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Star ===== --> */}
              {isConnected && (
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              )}
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Star ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Star ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  setConnected={setIsConnected}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Star ===== --> */}
                <main>
                  <div className="">{children}</div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
          </AppProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

import "./App.css";
import { Routes, Route } from "react-router-dom";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./Login";
import { Instances } from "./Instances/instances";
import { Clusters } from "./Clusters";
import { Marketplace } from "./Marketplace";
import { CardDetails } from "./components/CardDetails";
import { AiText } from "./AIText";
import { Billing } from "./Billing";
import { Organization } from "./Organization";
import { Account } from "./account";
import { AccessKey } from "./accessKey";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
const projectId = "cd3cc4d280e358f5e9be96987a8aca89";

const metadata = {
  name: "Intelliphy",
  description: "AI marketplace",
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

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/instances" element={<Instances />} />
            <Route path="/clusters" element={<Clusters />} />
            <Route path="/market/marketplace" element={<Marketplace />} />
            <Route path="/models/detail" element={<CardDetails />} />
            <Route path="/aiexplorer/text" element={<AiText />} />
            <Route path="/aiexplorer/image" element={<Instances />} />
            <Route path="/aiexplorer/audio" element={<Instances />} />
            <Route path="/interface" element={<Instances />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/settings/organization" element={<Organization />} />
            <Route path="/settings/account" element={<Account />} />
            <Route path="/settings/accesskey" element={<AccessKey />} />
          </Routes>
        </div>
        <Toaster toastOptions={{ position: "top-right" }} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;

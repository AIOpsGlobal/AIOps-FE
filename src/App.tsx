import "./App.css";

import { Routes, Route } from "react-router-dom";
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
function App() {
  return (
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
  );
}

export default App;

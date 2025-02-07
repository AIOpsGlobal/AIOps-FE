// "use client";

import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";

import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIOps",
  description: "Rebranding Enterprise solutions",
  openGraph: {
    title:
      "AIOps - Building a Global DeOS to Redefine AI Workload Orchestration.",
    description:
      "At AIOps, we're transforming this landscape by creating the first decentralized GPU computing network. By connecting unused GPU power worldwide, we reduce AI computing costs by 70% while enabling GPU owners to earn from their idle resources.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={false}>
        <DefaultLayout>
          {children}

          <Toaster toastOptions={{ position: "top-right" }} />
        </DefaultLayout>
      </body>
    </html>
  );
}

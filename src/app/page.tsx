import React from "react";
import { sidebarData } from "@/data/sidebarData";
import Sidebar from "@/components/sidebar";
import Documentation from "./documentations/page";

export default function Home() {
  return (
    <div className="flex min-h-screen">

      <main className="flex-1 min-w-0">
        <Documentation />
      </main>

    </div>
  );
}
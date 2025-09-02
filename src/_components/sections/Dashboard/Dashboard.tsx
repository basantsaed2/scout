// src/app/_components/DataTable.jsx
"use client";
import React, { useState } from "react";
import { Globe, BarChart3, Layers, Puzzle, FileText, Settings, Zap, Folder, Inbox, LucideIcon } from "lucide-react";
import MainContent from "./MainContent";
import RightPanel from "./RightPanel";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Statsbot");

  // Explicitly type sidebarItems to match SidebarProps
  const sidebarItems: { icon: LucideIcon; label: string; badge?: string }[] = [
    { icon: Inbox, label: "Inbox" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Layers, label: "Collections" },
    { icon: Puzzle, label: "Integrations" },
    { icon: FileText, label: "Templates" },
    { icon: Settings, label: "Settings" },
  ];

  const apps = [
    { name: "Statsbot", active: true },
    { name: "Chief" },
    { name: "Docs" },
    { name: "Accounting" },
  ];

  const actions = [
    { icon: Globe, title: "Get Context From Website", type: "Website", variable: "website" },
    { icon: Folder, title: "Save", type: "Cache", variable: "save" },
    { icon: Zap, title: "Generate Response", type: "GPT-4 Turbo", variable: "output" },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <Sidebar apps={apps} sidebarItems={sidebarItems} setActiveTab={setActiveTab} />
            <MainContent activeTab={activeTab} actions={actions} />
            <RightPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sidebarData } from "@/data/sidebarData";

function Sidebar() {
  const [active, setActive] = useState("Introduction");

  return (
    <div className="w-64 min-h-screen bg-gray-50 border-r border-gray-300 p-4">

      <div className="mb-8">
        <h2 className="text-lg font-semibold">
          Core Documentation
        </h2>
        <p className="text-sm text-gray-500">
          v1.0 Architecture Guide
        </p>
      </div>

      {sidebarData.map((section) => (
        <div key={section.title} className="mb-8">

          <h3 className="text-xs text-gray-500 uppercase mb-3">
            {section.title}
          </h3>

          {section.items.map((item) => (
            <div key={item}>

              {item === "Routing" ? (
                <Link
                  href="/documentations/routing"
                  onClick={() => setActive(item)}
                  className={`block w-full text-left px-3 py-2 text-sm mb-1 ${
                    active === item
                      ? "bg-blue-100 text-blue-700 border-l-2 border-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className={`block w-full text-left px-3 py-2 text-sm mb-1 ${
                    active === item
                      ? "bg-blue-100 text-blue-700 border-l-2 border-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              )}

              {item === "Routing" && (
                <div className="ml-4 pl-3 border-l border-gray-300 mb-3">

                  <p className="text-xs text-gray-600 py-2">
                    Defining Routes
                  </p>

                  <Link
                    href="/guides/dynamic-routes"
                    onClick={() => setActive("Dynamic Routes")}
                    className={`block text-xs py-2 ${
                      active === "Dynamic Routes"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    Dynamic Routes
                  </Link>

                  <p className="text-xs text-gray-600 py-2">
                    Parallel & Intercepting
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>
      ))}

      <div className="border-t border-gray-300 pt-4">
        <p className="text-sm mb-3">GitHub Repo</p>
        <p className="text-sm">API Reference</p>
      </div>

    </div>
  );
}

export default Sidebar;

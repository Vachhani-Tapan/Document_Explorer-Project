
import React from "react";
import Link from "next/link";

function Documentation() {
  const cards = [
    {
      title: "Getting Started",
      description:
        "Quickstart guides, prerequisites, and initial project configuration.",
      link: "Start reading",
      href: "/documentation/installation",
    },
    {
      title: "Core Concepts",
      description:
        "Deep dive into nested routing patterns, catch-all paths, and data loading.",
      link: "Explore concepts",
      href: "/documentation/routing",
    },
    {
      title: "Reference",
      description:
        "Detailed configuration parameters, flags, and CLI commands.",
      link: "View reference",
      href: "/documentation/configuration",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <p className="text-sm mb-6">
        Orbit Docs / Overview
      </p>

      <h1 className="text-4xl font-bold mb-4">
        Documentation
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome to Orbit Docs. Explore the core architecture,
        installation guides, and complete API references for
        building scalable modern web applications.
      </p>

      <hr className="mb-10" />

      <div className="space-y-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-gray-300 bg-gray-50 rounded p-6"
          >
            <h2 className="text-xl font-semibold mb-3">
              {card.title}
            </h2>

            <p className="text-sm text-gray-700 mb-4">
              {card.description}
            </p>

            <hr className="mb-3" />

            <Link
              href={card.href}
              className="text-blue-700 text-sm"
            >
              {card.link} →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-blue-50 border border-gray-300 border-l-4 border-l-blue-700 p-5 rounded">
        <h3 className="font-semibold mb-2">
          Architecture Alignment
        </h3>

        <p className="text-sm text-gray-700">
          Orbit 1.0 utilizes unified server-driven component
          composition with strict compile-time static checks.
          Ensure you review the configuration parameters
          before migration.
        </p>
      </div>

      <div className="mt-10 border border-gray-300 rounded">
        <div className="flex justify-between bg-gray-50 border-b border-gray-300 p-3">
          <p className="text-xs">
            Terminal - Quick Setup
          </p>

          <p className="text-xs text-blue-700">
            Copy
          </p>
        </div>

        <div className="p-4 font-mono text-sm">
          <p>
            $ npx orbit-cli create my-app --template standard
          </p>
          <p>
            $ cd my-app && npm run dev
          </p>
        </div>
      </div>

      <div className="flex justify-between border-t border-gray-300 mt-12 pt-6 text-xs text-gray-500">
        <p>
          ● Orbit framework v1.0.4 stable release
        </p>

        <div className="flex gap-5">
          <p>Documentation License</p>
          <p>Changelog</p>
        </div>
      </div>
    </div>
  );
}

export default Documentation;

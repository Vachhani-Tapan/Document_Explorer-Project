
import React from "react";

function NotFound() {
  const articles = [
    {
      title: "Quickstart & Installation",
      description:
        "Step-by-step setup guide to initialize your Orbit project scaffolding, package requirements, and environment flags.",
    },
    {
      title: "Routing and Catch-All Rules",
      description:
        "Comprehensive overview of file-based routing protocols, dynamic segment syntax, and custom 404 fallback handlers.",
    },
    {
      title: "Configuration Reference",
      description:
        "Schema definitions, runtime parameters, and full schema dictionary for orbit.config.ts.",
    },
  ];

  return (
    <div className="px-10 py-10 md:px-20 min-h-screen max-w-5xl mx-auto">

      <div className="text-xs text-gray-600 mb-8 font-mono">
        Documentation / 404 Not Found
      </div>

      <div className="mb-5">
        <span className="bg-indigo-50 text-blue-700 border border-indigo-200 px-2 py-1 text-xs font-mono">
          STATUS: 404_PAGE_NOT_FOUND
        </span>
      </div>

      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Page not found
      </h1>

      <p className="text-gray-700 leading-7 mb-6 max-w-2xl">
        The documentation page you requested could not be located.
        The path may have changed or the slug identifier might be invalid.
      </p>

      <p className="text-blue-700 text-sm mb-9">
        ← Back to Documentation
      </p>

      <hr className="border-gray-300 mb-10" />

      <div className="border border-gray-300 bg-slate-50 rounded p-5 mb-10">

        <div className="flex justify-between mb-3 text-xs font-mono text-gray-600">
          <span>QUICK PATH LOOKUP</span>
          <span>Search query cache</span>
        </div>

        <div className="flex border border-gray-300 bg-white p-1">
          <input
            type="text"
            placeholder="/docs/routing/catch-all-param"
            className="flex-1 min-w-0 px-3 py-1 outline-none text-sm font-mono"
          />

          <button
            type="button"
            className="bg-blue-700 text-white px-4 py-1 text-xs"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Suggested articles
        </h2>

        <span className="text-xs text-gray-500 font-mono">
          Frequently accessed resources
        </span>
      </div>

      <div className="flex flex-col gap-3 mb-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded p-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">

              <div className="border border-gray-300 bg-slate-50 w-10 h-10 flex items-center justify-center text-blue-700">
                {index + 1}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-600">
                  {article.description}
                </p>
              </div>
            </div>

            <span className="text-gray-600 text-xl">
              →
            </span>
          </div>
        ))}
      </div>

      <div className="border border-gray-300 rounded overflow-hidden mb-12">

        <div className="bg-slate-50 px-4 py-3 flex justify-between text-xs font-mono text-gray-600">
          <span>● orbit-diagnostic.log</span>
          <span>HTTP 404</span>
        </div>

        <div className="bg-slate-800 text-gray-200 p-5 font-mono text-xs leading-7 overflow-x-auto">
          <p># Diagnostic router trace</p>

          <p>
            $ orbit-cli verify --path "/docs/routing/catch-all-param"
          </p>

          <p className="text-red-200">
            ERR_ROUTER_SLUG_UNMATCHED: No route matching slug segment in manifest tree.
          </p>

          <p>
            → Suggested resolution: run orbit sync --manifest or inspect orbit.routes.json
          </p>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      <div className="flex justify-between flex-wrap gap-4 text-xs text-gray-600">
        <p>Looking for something specific that should be here?</p>

        <div className="flex gap-5">
          <span>Report broken link</span>
          <span>Community Discord</span>
        </div>
      </div>

    </div>
  );
}

export default NotFound;

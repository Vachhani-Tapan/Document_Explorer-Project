
import React from "react";

function Routing() {
  return (
    <div className="flex gap-10 px-10 py-8 min-h-screen">

      <div className="flex-1 max-w-3xl">

        <p className="text-xs font-mono text-gray-600 mb-5">
          Documentation / Core Concepts / Routing
        </p>

        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Routing
        </h1>

        <p className="text-gray-700 leading-7 mb-6">
          Orbit uses a file-system based routing mechanism with
          support for static paths, nested segments, and catch-all
          routes.
        </p>

        <hr className="border-gray-300 mb-8" />

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Overview
          </h2>

          <p className="text-gray-700 leading-7 mb-4">
            Every directory inside the{" "}
            <code className="border border-gray-300 bg-gray-50 px-1">
              app
            </code>{" "}
            directory maps directly to a matching URL path segment.
            When an incoming request reaches your edge cluster,
            Orbit analyzes the matching segment tree and evaluates
            each layout node before rendering leaf page handlers.
          </p>

          <p className="text-gray-700 leading-7 mb-5">
            Route resolution runs deterministically with zero runtime
            regex overhead. Leaf pages defined via{" "}
            <code className="border border-gray-300 px-1">
              page.tsx
            </code>{" "}
            or{" "}
            <code className="border border-gray-300 px-1">
              route.ts
            </code>{" "}
            automatically export their execution strategy to either
            static edge renderers or dynamic compute clusters.
          </p>

          <div className="border border-gray-300 border-l-4 border-l-blue-700 bg-indigo-50 p-4 text-sm leading-6">
            <span className="text-blue-700 font-semibold">
              Convention Note:
            </span>{" "}
            Orbit reserves system file identifiers including{" "}
            <code className="bg-white border px-1">
              layout.tsx
            </code>
            ,{" "}
            <code className="bg-white border px-1">
              loading.tsx
            </code>
            , and{" "}
            <code className="bg-white border px-1">
              error.tsx
            </code>{" "}
            to isolate distinct lifecycle tiers.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Catch-all Routes
          </h2>

          <p className="text-gray-700 leading-7 mb-5">
            Dynamic segments can be extended to catch all subsequent
            URL segments by prepending an ellipsis inside square
            brackets:{" "}
            <code className="border border-gray-300 px-1">
              [...slug]
            </code>
            . The matched parameters are parsed into an array of
            path parts.
          </p>

          <div className="border border-gray-300 rounded overflow-hidden mb-5">
            <div className="bg-slate-900 text-gray-200 px-4 py-3 flex justify-between text-xs font-mono">
              <span>● app/[...slug]/page.tsx</span>
              <span>Copy</span>
            </div>

            <pre className="bg-slate-800 text-indigo-100 p-4 text-xs leading-6 overflow-x-auto">
              <code>{`// app/[...slug]/page.tsx
export default function Page({ params }: { params: { slug: string[] } }) {
  return <div>Path: {params.slug.join('/')}</div>;
}`}</code>
            </pre>
          </div>

          <div className="border border-gray-300 rounded overflow-x-auto mb-5">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-50 font-mono text-gray-600">
                <tr>
                  <th className="p-3 border-b border-gray-300">
                    ROUTE PATH PATTERN
                  </th>
                  <th className="p-3 border-b border-gray-300">
                    EXAMPLE URL
                  </th>
                  <th className="p-3 border-b border-gray-300">
                    PARAMS OBJECT
                  </th>
                </tr>
              </thead>

              <tbody className="font-mono">
                <tr className="border-b border-gray-300">
                  <td className="p-3">
                    app/shop/[...slug]/page.tsx
                  </td>
                  <td className="p-3 text-gray-600">
                    /shop/clothes
                  </td>
                  <td className="p-3 text-blue-700">
                    {"{ slug: ['clothes'] }"}
                  </td>
                </tr>

                <tr>
                  <td className="p-3">
                    app/shop/[...slug]/page.tsx
                  </td>
                  <td className="p-3 text-gray-600">
                    /shop/clothes/tops
                  </td>
                  <td className="p-3 text-blue-700">
                    {"{ slug: ['clothes', 'tops'] }"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Route Groups
          </h2>

          <p className="text-gray-700 leading-7">
            Folders wrapped with parentheses, such as{" "}
            <code className="border border-gray-300 px-1">
              (marketing)
            </code>{" "}
            or{" "}
            <code className="border border-gray-300 px-1">
              (dashboard)
            </code>
            , serve purely as organizational conventions and are
            omitted from the final URL path resolution. Refer to
            the{" "}
            <span className="text-blue-700">
              nested layout hierarchy
            </span>{" "}
            or explore{" "}
            <span className="text-blue-700">
              multi-root application strategies
            </span>{" "}
            for complex multi-tenant projects.
          </p>
        </section>

        <hr className="border-gray-300 mb-6" />

        <div className="flex justify-between">
          <div>
            <p className="text-xs font-mono text-gray-500 mb-1">
              Previous
            </p>
            <p className="font-semibold text-sm">
              ← Project Setup
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-mono text-gray-500 mb-1">
              Next
            </p>
            <p className="font-semibold text-sm">
              Layouts →
            </p>
          </div>
        </div>

      </div>

      <div className="hidden lg:block w-52 shrink-0">
        <div className="border-l border-gray-300 pl-4">
          <h3 className="text-xs font-mono font-semibold text-gray-600 mb-4">
            ON THIS PAGE
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <p>Overview</p>

            <p className="bg-blue-50 text-blue-700 border-l-2 border-blue-700 px-2 py-1">
              Catch-all Routes
            </p>

            <p>Route Groups</p>
          </div>

          <hr className="border-gray-300 my-4" />

          <p className="text-xs text-gray-600">
            Edit this page on GitHub
          </p>
        </div>
      </div>

    </div>
  );
}

export default Routing;

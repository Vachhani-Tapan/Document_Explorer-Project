import React from "react";

function DynamicRoutes() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-8">

      <p className="text-xs font-mono text-gray-600 mb-4">
        Guides / Next.js / App Router / Dynamic Routes
      </p>

      <div className="flex items-center gap-3 mb-3">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-mono font-semibold">
          GUIDE
        </span>
        <span className="text-xs text-gray-500 font-mono">
          Estimated read: 4 min
        </span>
      </div>

      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Dynamic Routes
      </h1>

      <p className="text-gray-700 leading-7 mb-6">
        Learn how to define dynamic route segments and handle
        catch-all parameters in nested application architectures.
      </p>

      <hr className="border-gray-300 mb-8" />

      <div className="bg-indigo-50 border border-gray-300 border-l-4 border-l-blue-700 p-5 mb-10">
        <p className="text-sm leading-6">
          <span className="font-semibold text-blue-700">
            Prerequisite Knowledge:
          </span>{" "}
          In the App Router, dynamic segments allow segments of your
          URL path to be variable without relying on query parameters.
          Dynamic segments are evaluated at request time or
          pre-rendered at build time with{" "}
          <code className="bg-white border border-gray-300 px-1">
            generateStaticParams()
          </code>.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-700 text-white px-2 py-1 text-xs">
            1
          </span>
          <h2 className="text-2xl font-semibold">
            Creating the segment folder
          </h2>
        </div>

        <p className="text-gray-700 leading-7 mb-5">
          A Dynamic Segment can be created by wrapping a folder's
          name in square brackets:{" "}
          <code className="border border-gray-300 px-1">
            [id]
          </code>{" "}
          or{" "}
          <code className="border border-gray-300 px-1">
            [slug]
          </code>
          . For example, to handle an arbitrary project ID within
          Orbit, organize your app directory structure as follows:
        </p>

        <div className="border border-gray-300 rounded overflow-hidden">
          <div className="bg-slate-900 text-gray-200 px-4 py-3 flex justify-between text-xs font-mono">
            <span>app/projects/[id]/page.tsx</span>
            <span>Copy</span>
          </div>

          <pre className="bg-slate-950 text-indigo-100 p-5 text-xs leading-6 overflow-x-auto">
            <code>{`export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <section className="project-container">
      <h1>Active Project ID: {params.id}</h1>
    </section>
  );
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-700 text-white px-2 py-1 text-xs">
            2
          </span>
          <h2 className="text-2xl font-semibold">
            Accessing route parameters
          </h2>
        </div>

        <p className="text-gray-700 leading-7 mb-5">
          Dynamic segment values are passed as the{" "}
          <code className="border border-gray-300 px-1">
            params
          </code>{" "}
          object inside the page, layout, and metadata generator
          functions. In asynchronous environments, you resolve or
          destructure this object directly from your component
          arguments.
        </p>

        <div className="border border-gray-300 rounded overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-50 font-mono text-gray-600">
              <tr>
                <th className="p-3 border-b border-gray-300">
                  ROUTE PATTERN
                </th>
                <th className="p-3 border-b border-gray-300">
                  EXAMPLE URL
                </th>
                <th className="p-3 border-b border-gray-300">
                  RESOLVED PARAMS
                </th>
              </tr>
            </thead>

            <tbody className="font-mono">
              <tr className="border-b border-gray-300">
                <td className="p-3 text-blue-700">
                  app/blog/[slug]/page.js
                </td>
                <td className="p-3">
                  /blog/hello-world
                </td>
                <td className="p-3">
                  {"{ slug: 'hello-world' }"}
                </td>
              </tr>

              <tr>
                <td className="p-3 text-blue-700">
                  app/shop/[category]/[item]/page.js
                </td>
                <td className="p-3">
                  /shop/shoes/boots
                </td>
                <td className="p-3">
                  {"{ category: 'shoes', item: 'boots' }"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-700 text-white px-2 py-1 text-xs">
            3
          </span>
          <h2 className="text-2xl font-semibold">
            Handling optional catch-all segments
          </h2>
        </div>

        <p className="text-gray-700 leading-7 mb-5">
          When building docs systems or multi-level CMS trees,
          paths can vary in depth. Use double brackets{" "}
          <code className="border border-gray-300 px-1">
            [[...slug]]
          </code>{" "}
          to make catch-all segments optional, matching both the
          root parent path and arbitrarily nested sub-paths.
        </p>

        <div className="border border-gray-300 rounded overflow-hidden">
          <div className="bg-slate-900 text-gray-200 px-4 py-3 flex justify-between text-xs font-mono">
            <span>app/docs/[[...slug]]/page.tsx</span>
            <span>Copy</span>
          </div>

          <pre className="bg-slate-950 text-indigo-100 p-5 text-xs leading-6 overflow-x-auto">
            <code>{`type Props = {
  params: { slug?: string[] }
};

export default function DocsReader({ params }: Props) {
  const currentPath = params.slug
    ? params.slug.join('/')
    : 'index';

  return <article>Displaying document tree: {currentPath}</article>;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-700 text-white px-2 py-1 text-xs">
            4
          </span>
          <h2 className="text-2xl font-semibold">
            Providing fallback behavior
          </h2>
        </div>

        <p className="text-gray-700 leading-7 mb-5">
          When dynamic segments fail to resolve to a known record
          in your backend database or content source, trigger
          the standard{" "}
          <code className="border border-gray-300 px-1">
            notFound()
          </code>{" "}
          boundary to render your application's customized{" "}
          <code className="border border-gray-300 px-1">
            not-found.tsx
          </code>{" "}
          view immediately.
        </p>

        <div className="bg-amber-50 border border-gray-300 border-l-4 border-l-amber-500 p-5">
          <p className="text-sm leading-6">
            <span className="text-amber-700 font-semibold">
              Safety Tip:
            </span>{" "}
            Never serve un-sanitized dynamic route parameters
            directly into raw HTML or arbitrary queries. Always
            validate incoming params using schemas like Zod or
            Orbit Schema Validator before performing IO operations.
          </p>
        </div>
      </section>

      <hr className="border-gray-300 mb-6" />

      <div className="flex justify-between mb-12">
        <div>
          <p className="text-xs text-gray-500 mb-1">
            ← Previous
          </p>
          <p className="text-sm font-semibold">
            Defining Routes
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500 mb-1">
            Next →
          </p>
          <p className="text-sm font-semibold">
            Parallel & Intercepting
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-300 p-5 flex justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          Was this guide helpful?
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            className="border border-gray-300 bg-white px-3 py-2 text-xs"
          >
            Yes, thanks!
          </button>

          <button
            type="button"
            className="border border-gray-300 bg-white px-3 py-2 text-xs"
          >
            Could be better
          </button>
        </div>
      </div>

    </div>
  );
}

export default DynamicRoutes;

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-between items-center">

        <div className="flex justify-between items-center gap-8">
          <div className="flex justify-between items-center gap-4 pl-5">
            <img src="/images.png" alt="Orbit Docs Logo" width={50} />
            <p>Orbit Docs</p>
          </div>

          <div className="flex justify-between items-center gap-6 ml-6">
            <Link
              href="/documentations"
              className={
                pathname.startsWith("/documentations")
                  ? "text-purple-500"
                  : "text-black"
              }
            >
              Documentations
            </Link>

            <Link
              href="/guides/dynamic-routes"
              className={
                pathname.startsWith("/guides")
                  ? "text-purple-500"
                  : "text-black"
              }
            >
              Guides
            </Link>

            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-purple-500"
                  : "text-black"
              }
            >
              About
            </Link>
          </div>
        </div>

        <div className="pr-20 flex justify-between items-center gap-8">
          <div className="flex justify-between items-center gap-2 border border-gray-300 rounded-md pr-1 py-1 text-gray-500 text-xs">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHtf9Ktn9vgkOJ3PLGy5BBPw8tLOmiHQEquPjHLEziw&s"
              alt=""
              width={25}
            />
            <p>Search Documentation...</p>
          </div>

          <div className="flex justify-between items-center gap-2 border border-gray-300 rounded-md px-2 py-1 text-gray-500 text-xs">
            v1.0
          </div>

          <img
            src="/images.png"
            alt=""
            width={25}
            className="opacity-55"
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

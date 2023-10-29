"use client";
import React from "react";
import Link from "next/link";

export default function Ribbon() {
  return (
    <div className="flex justify-between items-center pr-8 bg-neutral-200">
      <div className="flex items-center space-x-4">
        <svg
          className="ml-5"
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="98"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"
          />
        </svg>
        <p className="text-zinc-800  font-medium text-6xl ">learn stream</p>
      </div>
      <Link href="/api/auth/logout">
        <button className="font-bold bg-zinc-400 outline outline-zinc-500 text-zinc-800 text-2xl rounded-2xl w-45 h-12 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-105 transition-transform">
          Log Out
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export const classAdd = "text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-2 py-1 text-center mr-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-blue-800 flex items-center antialiased";

function Add() {
  return (
    <div className="col-span-1 sm:col-span-1 justify-self-center">
      <Link href="/new">
        <button
          type="button"
          className="text-white bg-[#3786B2] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center mr-2 mb-2 dark:bg-[#3786B2] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default Add;

"use client";

import { useState } from "react";
import Education from "./Education";
import Work from "./Work";

export default function Tabs() {
  const [tab, setTab] = useState("education");

  return (
    <section className="mt-20">

      {/* Tabs */}
      <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
        <button
          onClick={() => setTab("work")}
          className={`w-full py-2 rounded cursor-pointer hover:text-indigo-600 dark:hover:text-amber-300 transition ${
            tab === "work"
              ? "bg-white dark:bg-black "
              : "text-gray-500"
          }`}
        >
          Work
        </button>

        <button
          onClick={() => setTab("education")}
          className={`w-full py-2 rounded cursor-pointer hover:text-indigo-600 dark:hover:text-amber-300 transition ${
            tab === "education"
              ? "bg-white dark:bg-black"
              : "text-gray-500"
          }`}
        >
          Education
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {tab === "education" ? <Education /> : <Work />}
      </div>
    </section>
  );
}
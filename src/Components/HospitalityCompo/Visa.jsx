"use client";

import React from "react";

export default function Visa() {
  return (
    <div>
      <div className="overflow-hidden  p-4 mt-12">
        <div className="marquee-content flex gap-4 items-center animate-marquee">
          <div className="px-4 py-2 bg-blue-500 text-white rounded w-full">
            Breaking News
          </div>
          <div className="px-4 py-2 bg-green-500 text-white rounded w-full">
            Stock Update
          </div>
          <div className="px-4 py-2 bg-cyan-500 text-white rounded w-full">
            Weather Alert
          </div>
          <div className="px-4 py-2 bg-yellow-500 text-black rounded w-full">
            Sports Scores
          </div>
          <div className="px-4 py-2 bg-red-500 text-white rounded w-full">
            Traffic Report
          </div>
          <div className="px-4 py-2 bg-purple-500 text-white rounded w-full">
            Tech Update
          </div>
          <div className="px-4 py-2 bg-pink-500 text-white rounded w-full">
            Entertainment
          </div>
          <div className="px-4 py-2 bg-indigo-500 text-white rounded w-full">
            Science News
          </div>
          <div className="px-4 py-2 bg-teal-500 text-white rounded w-full">
            Health Tips
          </div>
          <div className="px-4 py-2 bg-orange-500 text-white rounded w-full">
            Food & Dining
          </div>
        </div>
      </div>
    </div>
  );
}

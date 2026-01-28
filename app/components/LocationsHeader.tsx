"use client";

import { useState } from "react";

export default function LocationsHeader() {
  const [activeFilter, setActiveFilter] = useState("trending");

  const filters = [
    { id: "trending", icon: "trending_up", label: "Trending" },
    { id: "beachfront", icon: "beach_access", label: "Beachfront" },
    { id: "cabins", icon: "cabin", label: "Cabins" },
    { id: "pools", icon: "pool", label: "Amazing pools" },
    { id: "castles", icon: "castle", label: "Castles" },
    { id: "countryside", icon: "landscape", label: "Countryside" },
    { id: "skiing", icon: "downhill_skiing", label: "Skiing" },
    { id: "lakefront", icon: "waves", label: "Lakefront" },
    { id: "design", icon: "palette", label: "Design" },
    { id: "icons", icon: "local_fire_department", label: "Icons" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-[#f0f3f4] dark:border-[#2a353b]">
      {/* Main Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="size-8 text-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="hidden lg:block text-xl font-bold tracking-tight text-primary">
            StayFinder
          </h1>
        </div>

        {/* Central Search Bar */}
        <div className="flex items-center border border-[#dddddd] dark:border-[#2a353b] rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer py-2 px-2 max-w-[450px] w-full bg-white dark:bg-[#1a262e]">
          <button className="flex-1 px-4 text-sm font-semibold border-r border-[#dddddd] dark:border-[#2a353b] text-center truncate">
            Anywhere
          </button>
          <button className="flex-1 px-4 text-sm font-semibold border-r border-[#dddddd] dark:border-[#2a353b] text-center truncate">
            Any week
          </button>
          <button className="flex-[1.2] px-4 text-sm font-normal text-[#617c89] text-center truncate">
            Add guests
          </button>
          <div className="bg-primary text-white p-2 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            className="hidden md:block text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-full transition"
            href="#"
          >
            Airbnb your home
          </a>
          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
            <span className="material-symbols-outlined text-[20px]">public</span>
          </button>
          <div className="flex items-center gap-2 border border-[#dddddd] dark:border-[#2a353b] p-1.5 pl-3 rounded-full hover:shadow-md transition cursor-pointer">
            <span className="material-symbols-outlined text-[22px]">menu</span>
            <div
              className="size-8 bg-gray-500 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3VbsJj9JIKrjMJ7Ex1PHwqxnKDw6_ilkYi5bPG0lg6lTfCzC-jKZ8RG-kQuR_mhBVlU1emODwJ3sGqAeEiozb3BZmV3_EiKeMGGmfDnE08ZSYXrrfJWVX_lsBtk6-rlT-C-6iyArxHvAz1o7K1S_FpMD0OzD-M3LjOuifRQFMv_OvzyNHqyuZ8nrF_PoBfyFpylA5CIt7xwSkIfz2jeupti6f--FD08AAbMW4zRqQYFyEksHyq6BTV-aVaDBJtXvSXB9HhBItfgY')",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-4 flex items-center gap-8">
        <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar flex-1">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex flex-col items-center gap-1 min-w-[56px] pb-2 cursor-pointer transition ${
                activeFilter === filter.id
                  ? "opacity-100 border-b-2 border-black dark:border-white"
                  : "opacity-60 hover:opacity-100 hover:border-b-2 hover:border-[#dddddd] dark:hover:border-[#2a353b]"
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">
                {filter.icon}
              </span>
              <span className="text-[12px] font-medium whitespace-nowrap">
                {filter.label}
              </span>
            </button>
          ))}
        </div>
        <button className="hidden md:flex items-center gap-2 border border-[#dddddd] dark:border-[#2a353b] px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <span className="text-xs font-semibold">Filters</span>
        </button>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Location } from "../types/location";

type SquarePropertyCardProps = {
  location: Location;
  featured: boolean;
};

const fallbackImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC5PPyD0N8_09fxVmYnV3X2yAnbGehvfcJm1mmdXwM_av6-wQe9mYaewDtMQu_zbuEzNJbQ98jTAD6Mf8L5e35K5jXM5KCXL3borCsZecQiT4GdA-29ES92DNolnymsXYXkqnURE7rhDTQH4FFetDbJI4SumKvYP8cyVVLypst6NZVKWyP7LWMo3YJn-9zAhJO2bD5pJAr0GNdqawgeqayvTdJRnBBqQZY6iaYukvvaS9yXb7oquiM7OxywdbcpyuWqwIx2EZvj6F4";

export default function SquarePropertyCard({
  location,
  featured,
}: SquarePropertyCardProps) {
  const locationDisplay = `${location.city}, ${location.country}`;
  const imageUrl = location.imageUrl ?? fallbackImageUrl;
  const rating = location.rating ?? 0;
  const pricePerNight = location.pricePerNight;

  return (
    <Link
      href={`/locations/${location.slug}`}
      className="flex flex-col gap-3 group cursor-pointer"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <button
          type="button"
          className="absolute top-3 right-3 z-10 text-white drop-shadow-md hover:scale-110 transition active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          aria-label="Save"
        >
          <span className="material-symbols-outlined text-[28px]">favorite</span>
        </button>
        {featured && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold text-primary z-10">
            FEATURED
          </div>
        )}
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        ></div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[15px] font-bold leading-tight">{location.name}</p>
          <p className="text-[#617c89] text-[14px]">{locationDisplay}</p>
          {pricePerNight != null && (
            <p className="mt-1.5 text-[15px]">
              <span className="font-bold">${pricePerNight}</span>{" "}
              <span className="font-normal">night</span>
            </p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] fill-1">star</span>
          <span className="text-[14px] font-normal">{rating}</span>
        </div>
      </div>
    </Link>
  );
}

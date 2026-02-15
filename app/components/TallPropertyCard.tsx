"use client";

import Link from "next/link";
import { FALLBACK_IMAGE_URL } from "@/app/lib/fallback-image";
import { Location } from "../types/location";

type TallPropertyCardProps = {
  location: Location;
  featured: boolean;
};

export default function TallPropertyCard({
  location,
  featured,
}: TallPropertyCardProps) {
  const locationDisplay = `${location.city}, ${location.country}`;
  const imageUrl = location.featured_image?.url ?? FALLBACK_IMAGE_URL;
  const rating = location.rating ?? 0;
  const pricePerNight = location.pricePerNight;

  return (
    <Link
      href={`/locations/${location.slug}`}
      className="flex-none w-[280px] group cursor-pointer block"
    >
      <div className="relative aspect-3/4 rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        ></div>
        <button
          type="button"
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          aria-label="Save"
        >
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
        {featured && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-bold text-primary">
            FEATURED
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-lg">{location.name}</h4>
          <p className="text-gray-500 text-sm">{locationDisplay}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
          <span className="text-sm font-bold">{rating}</span>
        </div>
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        {pricePerNight != null ? (
          <>
            <span className="text-lg font-bold">${pricePerNight}</span>
            <span className="text-gray-500 text-sm">/ night</span>
          </>
        ) : (
          <span className="text-gray-500 text-sm font-medium">Hidden</span>
        )}
      </div>
    </Link>
  );
}

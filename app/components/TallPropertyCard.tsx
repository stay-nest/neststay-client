import { Location } from "../types/location";

type TallPropertyCardProps = {
  location: Location;
  featured: boolean;
};

const fallbackImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC5PPyD0N8_09fxVmYnV3X2yAnbGehvfcJm1mmdXwM_av6-wQe9mYaewDtMQu_zbuEzNJbQ98jTAD6Mf8L5e35K5jXM5KCXL3borCsZecQiT4GdA-29ES92DNolnymsXYXkqnURE7rhDTQH4FFetDbJI4SumKvYP8cyVVLypst6NZVKWyP7LWMo3YJn-9zAhJO2bD5pJAr0GNdqawgeqayvTdJRnBBqQZY6iaYukvvaS9yXb7oquiM7OxywdbcpyuWqwIx2EZvj6F4";

export default function TallPropertyCard({
  location,
  featured,
}: TallPropertyCardProps) {
  const locationDisplay = `${location.city}, ${location.country}`;
  const imageUrl = location.imageUrl ?? fallbackImageUrl;
  const rating = location.rating ?? 0;
  const pricePerNight = location.pricePerNight;

  return (
    <div className="flex-none w-[280px] group cursor-pointer">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        ></div>
        <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors">
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
    </div>
  );
}

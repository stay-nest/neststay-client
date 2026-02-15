import PropertyCard from "./PropertyCard";
import propertiesData from "../../mock-data/properties.json";

export default function MostPopularSection() {
  return (
    <section className="max-w-[1280px] mx-auto w-full py-16 px-6">
      <div className="flex items-center justify-between mb-8 px-2">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Most Popular</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Our guests&apos; top-rated retreats this month
          </p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-8 px-2">
        {propertiesData.map((property) => (
          <PropertyCard
            key={property.location.slug}
            location={property.location}
            variant={property.variant as "tall" | "square"}
            featured={property.featured}
          />
        ))}
      </div>
    </section>
  );
}

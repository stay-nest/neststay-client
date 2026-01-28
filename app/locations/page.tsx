import LocationsHeader from "../components/LocationsHeader";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../../mock-data/properties.json";

export default function LocationsPage() {
  return (
    <>
      <LocationsHeader />
      <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10">
          {propertiesData.map((property) => (
            <PropertyCard
              key={property.location.hotel_id}
              location={property.location}
              variant="square"
              featured={property.featured}
            />
          ))}
        </div>
      </main>
      {/* Floating Map Button */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
        <button className="flex items-center gap-2 bg-[#222222] dark:bg-primary text-white px-5 py-3.5 rounded-full shadow-xl hover:scale-105 transition-transform active:scale-95 font-semibold text-sm">
          <span>Show map</span>
          <span className="material-symbols-outlined text-[20px]">map</span>
        </button>
      </div>
      <Footer />
    </>
  );
}

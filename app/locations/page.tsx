import LocationsHeader from "../components/LocationsHeader";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import PropertyCard from "../components/PropertyCard";
import type { LocationsApiResponse } from "@/app/types/location";
import { parsePage, parsePageSize, getInternalApiBaseUrl } from "./utils";

type PageProps = {
  searchParams: Promise<{ page?: string; page_size?: string }>;
};

export default async function LocationsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = parsePage(params?.page);
  const pageSize = parsePageSize(params?.page_size);

  let data: LocationsApiResponse;
  try {
    // Get the base URL for internal API calls
    const baseUrl = await getInternalApiBaseUrl();
    
    // Build query string for the Next.js API route
    const queryParams = new URLSearchParams({
      page: String(page),
      page_size: String(pageSize),
    });
    
    // Call the Next.js API route which proxies to the backend
    const response = await fetch(
      `${baseUrl}/api/locations?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }

    data = await response.json();
  } catch {
    return (
      <>
        <LocationsHeader />
        <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8">
          <p className="text-red-600 dark:text-red-400">
            Failed to load locations. Please try again later.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const { items, total } = data;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return (
    <>
      <LocationsHeader />
      <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8">
        {items.length === 0 ? (
          <p className="text-[#617c89] dark:text-[#8a9ca6]">
            No locations found.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10">
              {items.map((item) => (
                <PropertyCard
                  key={item.slug}
                  location={item}
                  variant="square"
                  featured={false}
                />
              ))}
            </div>

            <Pagination
              basePath="/locations"
              page={page}
              pageSize={pageSize}
              totalPages={totalPages}
            />
          </>
        )}
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

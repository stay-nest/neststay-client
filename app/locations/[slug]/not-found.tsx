import Link from "next/link";
import LocationsHeader from "@/app/components/LocationsHeader";
import Footer from "@/app/components/Footer";

export default function LocationNotFound() {
  return (
    <>
      <LocationsHeader />
      <main className="max-w-[1200px] mx-auto w-full px-4 md:px-10 lg:px-20 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#111618] dark:text-white mb-2">
          Location not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The location you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/locations"
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
        >
          Browse locations
        </Link>
      </main>
      <Footer />
    </>
  );
}

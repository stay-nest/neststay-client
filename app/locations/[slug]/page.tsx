import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LocationsHeader from "@/app/components/LocationsHeader";
import Footer from "@/app/components/Footer";
import LocationGallery from "@/app/components/LocationGallery";
import BookingForm from "@/app/components/BookingForm";
import LocationReviews from "@/app/components/LocationReviews";
import LocationMapPlaceholder from "@/app/components/LocationMapPlaceholder";
import { http } from "@/app/lib/http";
import type { LocationDetail } from "@/app/types/location";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const DEFAULT_AMENITIES = [
  { icon: "apartment", label: "City skyline view" },
  { icon: "wifi", label: "Fast wifi" },
  { icon: "work", label: "Dedicated workspace" },
  { icon: "kitchen", label: "Kitchen" },
  { icon: "ac_unit", label: "Central air conditioning" },
  { icon: "tv", label: "HDTV" },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const location = await http.get<LocationDetail>(`/locations/${slug}`, {
      revalidate: 60,
    });
    return {
      title: `${location.name} | Neststay`,
      description:
        location.description ?? `Stay at ${location.name} in ${location.city}, ${location.country}.`,
    };
  } catch {
    return { title: "Location | Neststay" };
  }
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let location: LocationDetail;
  try {
    location = await http.get<LocationDetail>(`/locations/${slug}`, {
      revalidate: 60,
    });
  } catch (err) {
    const is404 =
      err instanceof Error && err.message.includes("404");
    if (is404) notFound();
    return (
      <>
        <LocationsHeader />
        <main className="max-w-[1200px] mx-auto w-full px-4 md:px-10 lg:px-20 py-12">
          <p className="text-red-600 dark:text-red-400">
            Failed to load this location. Please try again later.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const images =
    location.images && location.images.length > 0
      ? location.images
      : location.featured_image
        ? [location.featured_image]
        : [];
  const rating = location.rating ?? 0;
  const reviewCount = location.reviewCount ?? 0;
  const pricePerNight = location.pricePerNight ?? 0;
  const addressLabel = [location.city, location.state, location.country]
    .filter(Boolean)
    .join(", ");
  const amenities =
    location.amenities && location.amenities.length > 0
      ? location.amenities.map((label) => ({ icon: "check", label }))
      : DEFAULT_AMENITIES;

  return (
    <>
      <LocationsHeader />
      <main className="max-w-[1200px] mx-auto w-full px-4 md:px-10 lg:px-20">
        {/* Page heading */}
        <div className="flex flex-col gap-2 py-6">
          <h1 className="text-[#111618] dark:text-white text-3xl font-bold leading-tight tracking-tight">
            {location.name}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary filled-icon text-base">
                  star
                </span>
                <span>{rating}</span>
              </div>
              <span className="text-gray-400">·</span>
              <button
                type="button"
                className="underline decoration-1 underline-offset-2"
              >
                {reviewCount} reviews
              </button>
              <span className="text-gray-400">·</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  workspace_premium
                </span>
                <span>Superhost</span>
              </div>
              <span className="text-gray-400">·</span>
              <button
                type="button"
                className="underline decoration-1 underline-offset-2"
              >
                {addressLabel}
              </button>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-semibold underline decoration-1 underline-offset-2"
              >
                <span className="material-symbols-outlined text-base">
                  ios_share
                </span>{" "}
                Share
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-semibold underline decoration-1 underline-offset-2"
              >
                <span className="material-symbols-outlined text-base">
                  favorite
                </span>{" "}
                Save
              </button>
            </div>
          </div>
        </div>

        <LocationGallery images={images} locationName={location.name} />

        {/* Main body: two columns */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Left column */}
          <div className="flex-1">
            {/* Host headline & avatar */}
            <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-800 pb-6">
              <div>
                <h3 className="text-2xl font-bold">
                  Entire rental unit hosted by{" "}
                  {location.host?.name ?? "your host"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  2 guests · 1 bedroom · 1 bed · 1 bath
                </p>
              </div>
              {location.host?.avatarUrl && (
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                    style={{
                      backgroundImage: `url('${location.host.avatarUrl}')`,
                    }}
                    role="img"
                    aria-label={`Profile picture of ${location.host.name}`}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] filled-icon">
                      verified
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Highlight features */}
            <div className="py-8 border-b border-gray-200 dark:border-gray-800 space-y-6">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-2xl pt-1">
                  workspace_premium
                </span>
                <div>
                  <h4 className="font-bold">
                    {location.host?.name ?? "Your host"} is a Superhost
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-2xl pt-1">
                  location_on
                </span>
                <div>
                  <h4 className="font-bold">Great location</h4>
                  <p className="text-gray-500 text-sm">
                    95% of recent guests gave the location a 5-star rating.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-2xl pt-1">
                  calendar_today
                </span>
                <div>
                  <h4 className="font-bold">Free cancellation for 48 hours</h4>
                  <p className="text-gray-500 text-sm">
                    Get a full refund if you change your mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="py-8 border-b border-gray-200 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {location.description ??
                  `Welcome to ${location.name} in ${location.city}. This space offers a comfortable stay with everything you need.`}
              </p>
              <button
                type="button"
                className="mt-4 flex items-center gap-1 font-bold underline"
              >
                Show more{" "}
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>

            {/* Amenities */}
            <div className="py-8 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 py-1"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {icon}
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-8 border border-black dark:border-gray-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Show all amenities
              </button>
            </div>
          </div>

          {/* Right column: sticky booking form */}
          <BookingForm
            pricePerNight={pricePerNight}
            rating={rating}
            reviewCount={reviewCount}
            slug={location.slug}
          />
        </div>

        <LocationReviews
          rating={rating}
          reviewCount={reviewCount}
          reviews={location.reviews}
        />

        <LocationMapPlaceholder
          addressLabel={addressLabel}
          description={location.description ?? undefined}
        />
      </main>
      <Footer />
    </>
  );
}

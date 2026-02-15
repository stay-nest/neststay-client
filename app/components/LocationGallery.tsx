import { FALLBACK_IMAGE_URL } from "@/app/lib/fallback-image";
import type { LocationImage } from "@/app/types/location";

type LocationGalleryProps = {
  images: LocationImage[];
  locationName: string;
};

const PLACEHOLDER_ALT = "Property photo";

export default function LocationGallery({
  images,
  locationName,
}: LocationGalleryProps) {
  const hasImages = images.length > 0;
  const [main, ...rest] = hasImages ? images : [];
  const hasRest = rest.length > 0;

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px] rounded-xl overflow-hidden mb-8">
      <div
        className="col-span-2 row-span-2 bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer rounded-l-xl bg-gray-100 dark:bg-gray-800"
        style={{
          backgroundImage: main ? `url('${main.url}')` : `url('${FALLBACK_IMAGE_URL}')`,
        }}
        role="img"
        aria-label={main ? main.alt_text || `${locationName} – main` : PLACEHOLDER_ALT}
      />
      {hasRest ? (
        <>
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              backgroundImage: rest[0] ? `url('${rest[0].url}')` : undefined,
            }}
            role="img"
            aria-label={rest[0] ? rest[0].alt_text || `${locationName} – photo 2` : PLACEHOLDER_ALT}
          />
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer rounded-tr-xl"
            style={{
              backgroundImage: rest[1] ? `url('${rest[1].url}')` : undefined,
            }}
            role="img"
            aria-label={rest[1] ? rest[1].alt_text || `${locationName} – photo 3` : PLACEHOLDER_ALT}
          />
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              backgroundImage: rest[2] ? `url('${rest[2].url}')` : undefined,
            }}
            role="img"
            aria-label={rest[2] ? rest[2].alt_text || `${locationName} – photo 4` : PLACEHOLDER_ALT}
          />
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer rounded-br-xl relative"
            style={{
              backgroundImage: rest[3] ? `url('${rest[3].url}')` : undefined,
            }}
            role="img"
            aria-label={rest[3] ? rest[3].alt_text || `${locationName} – photo 5` : PLACEHOLDER_ALT}
          >
            <button
              type="button"
              className="absolute bottom-4 right-4 bg-white border border-black dark:border-gray-400 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined text-base">
                grid_view
              </span>
              Show all photos
            </button>
          </div>
        </>
      ) : (
        <div
          className="col-span-2 row-span-2 flex items-center justify-center gap-2 rounded-r-xl bg-gray-100 dark:bg-gray-800"
          aria-hidden
        >
          <button
            type="button"
            className="bg-white border border-black dark:border-gray-400 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-base">
              grid_view
            </span>
            Show all photos
          </button>
        </div>
      )}
    </div>
  );
}

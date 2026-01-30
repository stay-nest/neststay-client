type LocationGalleryProps = {
  images: string[];
  locationName: string;
};

const PLACEHOLDER_ALT = "Property photo";
const FALLBACK_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC5PPyD0N8_09fxVmYnV3X2yAnbGehvfcJm1mmdXwM_av6-wQe9mYaewDtMQu_zbuEzNJbQ98jTAD6Mf8L5e35K5jXM5KCXL3borCsZecQiT4GdA-29ES92DNolnymsXYXkqnURE7rhDTQH4FFetDbJI4SumKvYP8cyVVLypst6NZVKWyP7LWMo3YJn-9zAhJO2bD5pJAr0GNdqawgeqayvTdJRnBBqQZY6iaYukvvaS9yXb7oquiM7OxywdbcpyuWqwIx2EZvj6F4";

export default function LocationGallery({
  images,
  locationName,
}: LocationGalleryProps) {
  const effective =
    images.length > 0 && images.some(Boolean)
      ? images.filter(Boolean)
      : [FALLBACK_IMAGE];
  const [main, ...rest] = effective;
  const hasRest = rest.length > 0;

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px] rounded-xl overflow-hidden mb-8">
      <div
        className="col-span-2 row-span-2 bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer rounded-l-xl bg-gray-100 dark:bg-gray-800"
        style={{
          backgroundImage: main ? `url('${main}')` : `url('${FALLBACK_IMAGE}')`,
        }}
        role="img"
        aria-label={main ? `${locationName} – main` : PLACEHOLDER_ALT}
      />
      {hasRest ? (
        <>
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              backgroundImage: rest[0] ? `url('${rest[0]}')` : undefined,
            }}
            role="img"
            aria-label={rest[0] ? `${locationName} – photo 2` : PLACEHOLDER_ALT}
          />
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer rounded-tr-xl"
            style={{
              backgroundImage: rest[1] ? `url('${rest[1]}')` : undefined,
            }}
            role="img"
            aria-label={rest[1] ? `${locationName} – photo 3` : PLACEHOLDER_ALT}
          />
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              backgroundImage: rest[2] ? `url('${rest[2]}')` : undefined,
            }}
            role="img"
            aria-label={rest[2] ? `${locationName} – photo 4` : PLACEHOLDER_ALT}
          />
          <div
            className="bg-center bg-no-repeat bg-cover hover:opacity-90 transition-opacity cursor-pointer rounded-br-xl relative"
            style={{
              backgroundImage: rest[3] ? `url('${rest[3]}')` : undefined,
            }}
            role="img"
            aria-label={rest[3] ? `${locationName} – photo 5` : PLACEHOLDER_ALT}
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

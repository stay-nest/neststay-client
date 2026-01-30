import type { LocationReview } from "@/app/types/location";

type LocationReviewsProps = {
  rating: number;
  reviewCount: number;
  reviews?: LocationReview[];
};

const RATING_CATEGORIES = [
  { label: "Cleanliness", value: 4.9, width: "98%" },
  { label: "Accuracy", value: 4.8, width: "96%" },
  { label: "Communication", value: 5.0, width: "100%" },
] as const;

export default function LocationReviews({
  rating,
  reviewCount,
  reviews = [],
}: LocationReviewsProps) {
  const hasReviews = reviews.length > 0;

  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="flex items-center gap-2 text-2xl font-bold mb-8">
        <span className="material-symbols-outlined text-primary filled-icon text-3xl">
          star
        </span>
        <span>
          {rating} · {reviewCount} reviews
        </span>
      </div>
      {reviewCount > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 mb-12">
          {RATING_CATEGORIES.map(({ label, value, width }) => (
            <div
              key={label}
              className="flex items-center justify-between w-full"
            >
              <span className="text-gray-700 dark:text-gray-300">{label}</span>
              <div className="flex items-center gap-4 w-1/2">
                <div className="h-1 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width }}
                  />
                </div>
                <span className="text-xs font-bold w-6">{value}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {hasReviews ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reviews.slice(0, 2).map((review, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="size-12 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center shrink-0"
                    style={
                      review.avatarUrl
                        ? { backgroundImage: `url('${review.avatarUrl}')` }
                        : undefined
                    }
                    role="img"
                    aria-label={`Avatar of ${review.author}`}
                  />
                  <div>
                    <h5 className="font-bold">{review.author}</h5>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
          {reviewCount > 2 && (
            <button
              type="button"
              className="mt-10 border border-black dark:border-gray-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Show all {reviewCount} reviews
            </button>
          )}
        </>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          No reviews yet. Be the first to leave a review after your stay.
        </p>
      )}
    </section>
  );
}

type BookingFormProps = {
  pricePerNight: number;
  rating?: number;
  reviewCount?: number;
  slug: string;
};

const DEFAULT_NIGHTS = 5;
const CLEANING_FEE = 120;
const SERVICE_FEE_RATE = 0.148; // ~14.8% of subtotal for demo

export default function BookingForm({
  pricePerNight,
  rating = 0,
  reviewCount = 0,
  slug,
}: BookingFormProps) {
  const nights = DEFAULT_NIGHTS;
  const subtotal = pricePerNight * nights;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  const total = subtotal + CLEANING_FEE + serviceFee;

  return (
    <div className="lg:w-[380px]">
      <div className="sticky top-28 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl bg-white dark:bg-gray-900">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-2xl font-bold">${pricePerNight}</span>
            <span className="text-gray-500"> night</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <span className="material-symbols-outlined text-primary filled-icon text-[14px]">
              star
            </span>
            <span>{rating}</span>
            <span className="text-gray-400">·</span>
            <span className="underline text-gray-500">
              {reviewCount} reviews
            </span>
          </div>
        </div>
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg mb-4">
          <div className="flex border-b border-gray-300 dark:border-gray-600">
            <div className="flex-1 p-3 border-r border-gray-300 dark:border-gray-600 cursor-pointer">
              <div className="text-[10px] font-bold uppercase">Check-in</div>
              <div className="text-sm">6/15/2024</div>
            </div>
            <div className="flex-1 p-3 cursor-pointer">
              <div className="text-[10px] font-bold uppercase">Checkout</div>
              <div className="text-sm">6/20/2024</div>
            </div>
          </div>
          <div className="p-3 cursor-pointer flex justify-between items-center">
            <div>
              <div className="text-[10px] font-bold uppercase">Guests</div>
              <div className="text-sm">2 guests</div>
            </div>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-lg mb-4 hover:brightness-110 transition-all"
          data-slug={slug}
        >
          Reserve
        </button>
        <p className="text-center text-gray-500 text-sm mb-6">
          You won&apos;t be charged yet
        </p>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span className="underline">
              ${pricePerNight} x {nights} nights
            </span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span className="underline">Cleaning fee</span>
            <span>${CLEANING_FEE}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span className="underline">StayFinder service fee</span>
            <span>${serviceFee}</span>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between font-bold text-lg">
          <span>Total before taxes</span>
          <span>${total}</span>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4 text-gray-500 py-4 border border-gray-200 dark:border-gray-800 rounded-xl">
        <span className="material-symbols-outlined text-primary">flag</span>
        <span className="text-sm font-semibold underline">
          Report this listing
        </span>
      </div>
    </div>
  );
}

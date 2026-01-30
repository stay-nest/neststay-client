export default function LocationsLoading() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 animate-pulse"
            aria-hidden
          >
            <div className="w-full aspect-square rounded-xl bg-[#e5e5e5] dark:bg-[#2a353b]" />
            <div className="h-4 w-3/4 rounded bg-[#e5e5e5] dark:bg-[#2a353b]" />
            <div className="h-3 w-1/2 rounded bg-[#e5e5e5] dark:bg-[#2a353b]" />
          </div>
        ))}
      </div>
    </div>
  );
}

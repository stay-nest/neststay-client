export default function LocationDetailLoading() {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 md:px-10 lg:px-20">
      <div className="py-6 animate-pulse">
        <div className="h-9 w-3/4 rounded bg-gray-200 dark:bg-gray-700 mb-4" />
        <div className="h-5 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="h-[450px] rounded-xl bg-gray-200 dark:bg-gray-700 mb-8 animate-pulse" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <div className="h-24 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-48 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-32 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="lg:w-[380px] h-[420px] rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>
      <div className="py-12 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="h-8 w-48 rounded bg-gray-200 dark:bg-gray-700 mb-8" />
        <div className="h-[480px] rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
}

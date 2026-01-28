export default function HomeSearchForm() {
  return (
    <form className="w-full bg-white dark:bg-background-dark p-2 md:p-3 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-white/20">
      <div className="flex-1 flex items-center w-full px-4 border-r border-gray-100 dark:border-slate-700">
        <span className="material-symbols-outlined text-primary mr-3">location_on</span>
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] uppercase font-bold text-gray-400">Location</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium placeholder:text-gray-400"
            placeholder="Where are you going?"
            type="text"
            name="location"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center w-full px-4 border-r border-gray-100 dark:border-slate-700">
        <span className="material-symbols-outlined text-primary mr-3">calendar_today</span>
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] uppercase font-bold text-gray-400">Dates</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium placeholder:text-gray-400"
            placeholder="Add dates"
            type="text"
            name="dates"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center w-full px-4">
        <span className="material-symbols-outlined text-primary mr-3">group</span>
        <div className="flex flex-col items-start w-full">
          <span className="text-[10px] uppercase font-bold text-gray-400">Guests</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium placeholder:text-gray-400"
            placeholder="Add guests"
            type="text"
            name="guests"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full md:w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/30"
      >
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
}

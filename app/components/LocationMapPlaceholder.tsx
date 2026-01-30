type LocationMapPlaceholderProps = {
  addressLabel: string;
  description?: string;
};

export default function LocationMapPlaceholder({
  addressLabel,
  description,
}: LocationMapPlaceholderProps) {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-2xl font-bold mb-6">Where you&apos;ll be</h3>
      <div className="w-full h-[480px] rounded-xl bg-gray-100 dark:bg-gray-800 relative overflow-hidden shadow-inner flex items-center justify-center">
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
          <div className="relative text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-10 h-10 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">
                  home
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">
              Map integration coming soon
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="font-bold mb-2">{addressLabel}</h4>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
        <button
          type="button"
          className="mt-4 flex items-center gap-1 font-bold underline"
        >
          Show more{" "}
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>
      </div>
    </section>
  );
}

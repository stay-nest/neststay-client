export default function NewsletterSection() {
  return (
    <section className="max-w-[1280px] mx-auto w-full py-20 px-6">
      <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col items-center text-center gap-6 shadow-2xl shadow-primary/40">
        <div className="max-w-xl space-y-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Get inspired for your next trip
          </h3>
          <p className="text-white/80 text-lg">
            Subscribe to get secret deals and the latest travel guides delivered straight to your inbox.
          </p>
        </div>
        <div className="w-full max-w-md relative flex items-center p-1.5 bg-white rounded-full">
          <input
            className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-3 text-sm font-medium text-gray-800"
            placeholder="Enter your email"
            type="email"
          />
          <button className="bg-primary text-white rounded-full px-8 py-3 font-bold text-sm shadow-md hover:bg-[#0e8ec9] transition-all">
            Subscribe
          </button>
        </div>
        <p className="text-white/60 text-xs">We value your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}

import HomeSearchForm from "./HomeSearchForm";

export default function HomePageBanner() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center px-6 overflow-hidden">
      {/* Hero Carousel Simulation (Static for UI design) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 brightness-[0.7]"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw9gyvOaY-Qbl3yhGpU_c6fgGdLNXJ2D7nx3O8HMwC8w33VhTZa9Y1dyAzzzzLRjYWxKFDgLiNTvzg2baGOLo9RMuuQSyS-EU__dtdh1cxYSqgMhn1c_gOiOHqdtyQb6ZDKcmWwD5e5VwlsulpHp_ARms3p7eHJfDC44QB4Q8ZcU0i5rDNmtUVtbl1LrTJN0RYpxZK83RGFZ0XaoPvXLuv_lIKHH_X-5pgQmrV931kmxKlpPcRBRZXUCQmMb263CoGvwXMRfzjaJg')",
        }}
      ></div>
      <div className="relative z-10 w-full max-w-[850px] flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Find your next adventure
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-sm">
            Discover unique stays in over 190 countries around the world.
          </p>
        </div>
        {/* Floating Search Pill */}
        <HomeSearchForm />
      </div>
    </section>
  );
}

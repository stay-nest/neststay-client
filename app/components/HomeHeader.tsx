export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f3f4] dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-3">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h1 className="text-[#111618] dark:text-white text-xl font-bold leading-tight tracking-tight">StayFinder</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="/locations">Explore</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Trips</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Favorites</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            Sign Up
          </button>
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-[#f0f3f4] dark:bg-slate-800 text-[#111618] dark:text-white text-sm font-bold hover:bg-[#e4e8ea] transition-all">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}

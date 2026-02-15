export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-slate-800 pt-20 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 text-primary mb-6">
              <div className="size-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <h4 className="text-[#111618] dark:text-white text-xl font-bold">Neststay</h4>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Building a world where anyone can belong anywhere. Discover incredible stays around the globe.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-[#f0f3f4] dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-[#f0f3f4] dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-[#f0f3f4] dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-sm mb-6 uppercase tracking-wider">Support</h6>
            <ul className="space-y-4">
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Safety Information</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Cancellation Options</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Our COVID-19 Response</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-sm mb-6 uppercase tracking-wider">Community</h6>
            <ul className="space-y-4">
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Neststay.org</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Combatting discrimination</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Guest Referrals</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Host Rewards</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-sm mb-6 uppercase tracking-wider">Hosting</h6>
            <ul className="space-y-4">
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Try Hosting</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">AirCover for Hosts</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Explore resources</a></li>
              <li><a className="text-gray-500 text-sm hover:text-primary transition-colors" href="#">Visit our community forum</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <p className="text-gray-400 text-xs">© 2024 Neststay Inc.</p>
            <a className="text-gray-400 text-xs hover:text-gray-600 transition-colors" href="#">Privacy</a>
            <a className="text-gray-400 text-xs hover:text-gray-600 transition-colors" href="#">Terms</a>
            <a className="text-gray-400 text-xs hover:text-gray-600 transition-colors" href="#">Sitemap</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-xs font-bold hover:underline">
              <span className="material-symbols-outlined text-sm">language</span>
              English (US)
            </button>
            <button className="flex items-center gap-2 text-xs font-bold hover:underline">
              $ USD
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

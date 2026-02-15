"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";

export default function HomeHeader() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check auth status on mount and when modal closes
  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/status");
      const data = await response.json();
      setIsAuthenticated(data.isAuthenticated ?? false);
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
    checkAuthStatus();
  };

  return (
    <>
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
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/locations">Explore</Link>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Trips</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Favorites</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Support</a>
          </nav>
          <div className="flex items-center gap-3">
            {isLoading ? (
              // Show loading state or keep buttons hidden
              <div className="flex items-center gap-3">
                <div className="hidden sm:block min-w-[100px] h-11"></div>
                <div className="min-w-[100px] h-11"></div>
              </div>
            ) : isAuthenticated ? (
              // Show Profile and Logout buttons when authenticated
              <>
                <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-[#f0f3f4] dark:bg-slate-800 text-[#111618] dark:text-white text-sm font-bold hover:bg-[#e4e8ea] transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              // Show Sign Up and Log In buttons when not authenticated
              <>
                <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  Sign Up
                </button>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-5 bg-[#f0f3f4] dark:bg-slate-800 text-[#111618] dark:text-white text-sm font-bold hover:bg-[#e4e8ea] transition-all"
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

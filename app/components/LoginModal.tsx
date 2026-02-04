"use client";

import { useState, useEffect, useCallback } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"initial" | "password" | "otp">("initial");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    // Reset form state when closing
    setEmail("");
    setMobile("");
    setPassword("");
    setOtp("");
    setStep("initial");
    setError(null);
    setIsLoading(false);
    onClose();
  }, [onClose]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleProceed = async () => {
    if (step === "initial") {
      const emailFilled = email.trim() !== "";
      const mobileFilled = mobile.trim() !== "";

      if (emailFilled && !mobileFilled) {
        setStep("password");
        setError(null);
      } else if (mobileFilled && !emailFilled) {
        setStep("otp");
        setError(null);
      } else if (emailFilled && mobileFilled) {
        // If both are filled, prioritize email
        setStep("password");
        setError(null);
      }
    } else {
      // Handle form submission for password or OTP step
      setIsLoading(true);
      setError(null);

      try {
        const requestBody: Record<string, string> = {};
        
        if (step === "password" && email) {
          requestBody.email = email;
          requestBody.password = password;
        } else if (step === "otp" && mobile) {
          requestBody.mobile = mobile;
          requestBody.otp = otp;
        }

        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Login failed");
        }

        // Success - close modal and reset form
        handleClose();
        // Call onLoginSuccess callback if provided
        onLoginSuccess?.();
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    setStep("initial");
    setPassword("");
    setOtp("");
  };

  const canProceed = () => {
    if (step === "initial") {
      const emailFilled = email.trim() !== "";
      const mobileFilled = mobile.trim() !== "";
      // Allow proceed if exactly one field is filled
      return (emailFilled && !mobileFilled) || (mobileFilled && !emailFilled);
    } else if (step === "password") {
      return password.trim() !== "";
    } else if (step === "otp") {
      return otp.trim() !== "";
    }
    return false;
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && canProceed() && !isLoading) {
      handleProceed();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-background-dark rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#f0f3f4] dark:border-slate-800">
          <h2 className="text-xl font-bold">Login to your account</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
          {step === "initial" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-semibold mb-2 text-[#111618] dark:text-white"
                >
                  Mobile
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-[#dddddd] dark:border-[#2a353b] rounded-xl bg-white dark:bg-[#1a262e] text-[#111618] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  disabled={!!email}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#f0f3f4] dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-background-dark text-[#617c89]">or</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-[#111618] dark:text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#dddddd] dark:border-[#2a353b] rounded-xl bg-white dark:bg-[#1a262e] text-[#111618] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  disabled={!!mobile}
                />
              </div>
            </div>
          )}

          {step === "password" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold mb-2 text-[#111618] dark:text-white"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-[#dddddd] dark:border-[#2a353b] rounded-xl bg-white dark:bg-[#1a262e] text-[#111618] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-semibold mb-2 text-[#111618] dark:text-white"
                >
                  OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 border border-[#dddddd] dark:border-[#2a353b] rounded-xl bg-white dark:bg-[#1a262e] text-[#111618] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  maxLength={6}
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            {step !== "initial" && (
              <button
                onClick={handleBack}
                className="flex-1 px-4 py-3 border border-[#dddddd] dark:border-[#2a353b] rounded-xl font-semibold text-[#111618] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleProceed}
              disabled={!canProceed() || isLoading}
              className={`flex-1 px-4 py-3 rounded-xl font-semibold text-white transition ${
                canProceed() && !isLoading
                  ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                  : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-[20px]">
                    sync
                  </span>
                  {step === "password" ? "Logging in..." : "Verifying..."}
                </span>
              ) : (
                step === "initial" ? "Proceed" : step === "password" ? "Login" : "Verify"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { createContext, useContext, useState, useCallback } from "react";

const PHONE_NUMBER = "+15596134115";
const PHONE_DISPLAY = "(559) 613-4115";

type CallDialogContextType = {
  openCallDialog: () => void;
};

const CallDialogContext = createContext<CallDialogContextType>({
  openCallDialog: () => {},
});

export function useCallDialog() {
  return useContext(CallDialogContext);
}

export function CallConfirmProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCallDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleConfirm = () => {
    setIsOpen(false);
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <CallDialogContext.Provider value={{ openCallDialog }}>
      {children}

      {/* Overlay + Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Confirm call"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-bg/90"
            onClick={handleClose}
          />

          {/* Dialog box */}
          <div className="relative bg-surface border border-border p-8 md:p-10 max-w-[400px] w-full text-center">
            {/* Phone icon */}
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-on-primary"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3
              className="text-[var(--text-xl)] text-text uppercase tracking-[0.05em]"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
              }}
            >
              Call Eagle Dumpster?
            </h3>

            <p
              className="mt-3 text-[var(--text-2xl)] text-primary font-bold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {PHONE_DISPLAY}
            </p>

            <p className="mt-2 text-[var(--text-sm)] text-text-muted">
              Free quote, no obligation
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                className="w-full bg-primary text-on-primary py-4 font-medium text-[var(--text-base)] uppercase tracking-[0.08em] hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                Call Now
              </button>
              <button
                onClick={handleClose}
                className="w-full border border-border text-text-muted py-3 text-[var(--text-sm)] hover:border-primary hover:text-text transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                style={{
                  transitionDuration: "var(--duration-max)",
                  transitionTimingFunction: "var(--easing)",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </CallDialogContext.Provider>
  );
}

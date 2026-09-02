"use client";

import { useCallDialog } from "./CallConfirmDialog";

export function MobileCallBar() {
  const { openCallDialog } = useCallDialog();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[55] bg-primary p-3">
      <button
        onClick={openCallDialog}
        className="w-full flex items-center justify-center gap-3 bg-on-primary text-primary py-3.5 font-bold text-[var(--text-base)] uppercase tracking-[0.1em] active:scale-[0.98] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        style={{
          fontFamily: "var(--font-heading)",
          transitionDuration: "var(--duration-max)",
          transitionTimingFunction: "var(--easing)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
            clipRule="evenodd"
          />
        </svg>
        Call Now
      </button>
    </div>
  );
}

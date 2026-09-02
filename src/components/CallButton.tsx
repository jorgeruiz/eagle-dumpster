"use client";

import { useCallDialog } from "./CallConfirmDialog";

export function CallButton({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { openCallDialog } = useCallDialog();

  return (
    <button
      onClick={openCallDialog}
      className={className}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
}

import React from "react";

export default function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return <span className={className}>{status}</span>;
}

import React from "react";

export default function Card({
  tag,
  title,
  icon,
  data,
  className,
  iconClassName,
}: {
  tag?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  data: number | string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between pb-3">
        <div className={iconClassName}>{icon}</div>
        {tag && <div>{tag}</div>}
      </div>
      <p>{title}</p>
      <h3>{data}</h3>
    </div>
  );
}

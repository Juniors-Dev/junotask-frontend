import React from "react";

export default function WelcomeMessage({
  userName,
  className,
}: {
  userName: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1>Welcome back, {userName}!</h1>
      <p>Here&apos;s what&apos;s happening with your projects today.</p>
    </div>
  );
}

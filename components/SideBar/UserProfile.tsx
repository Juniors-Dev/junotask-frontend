import React from "react";

export default function UserProfile({
  userName,
  userRole,
}: {
  userName: string;
  userRole: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-sm font-semibold shrink-0">
        {userName.charAt(0)}
      </div>
      <div className="overflow-hidden">
        <p className="text-sm font-semibold truncate">{userName}</p>
        <p className="text-xs text-sidebar-muted truncate">{userRole}</p>
      </div>
    </div>
  );
}

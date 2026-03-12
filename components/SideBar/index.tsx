import React from "react";
import Icon from "@/components/Ui/Icon/Icon";
import UserProfile from "./UserProfile";

export default function Sidebar({
  userName,
  userRole,
  className,
  activePath = "/",
  isAdmin = false,
  onSignOut,
}: {
  userName: string;
  userRole: string;
  className?: string;
  activePath?: string;
  isAdmin?: boolean;
  onSignOut?: () => void;
}) {
  return (
    <aside className={`sidebar ${className ?? ""}`}>
      <div className="sidebar-logo">
        <Icon name="CircleCheckBig" className="text-blue-400" size={28} />
        <span className="font-bold text-xl tracking-tight">JunoTask</span>
      </div>
      <nav className="sidebar-nav">
        <a
          href="/"
          className={activePath === "/" ? "nav-link-active" : "nav-link"}
        >
          <Icon name="LayoutDashboard" size={20} />
          <span>Dashboard</span>
        </a>
        <a
          href="/projects"
          className={
            activePath === "/projects" ? "nav-link-active" : "nav-link"
          }
        >
          <Icon name="Folder" size={20} />
          <span>Projects</span>
        </a>
        {isAdmin && (
          <a
            href="/admin-dashboard"
            className={
              activePath === "/admin-dashboard" ? "nav-link-active" : "nav-link"
            }
          >
            <Icon name="ShieldCheck" size={20} />
            <span>Admin</span>
          </a>
        )}
      </nav>
      <div className="sidebar-footer">
        <UserProfile userName={userName} userRole={userRole} />
        <button onClick={onSignOut} className="sidebar-signout">
          <Icon name="LogOut" size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

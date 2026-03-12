import React from "react";
import Head from "next/head";
import { testUser } from "@/lib/testUser";
import WelcomeMessage from "@/components/Ui/WelcomeMessage/WelcomeMessage";
import Sidebar from "@/components/SideBar";
import AdminStatsSection from "@/components/AdminStats";
import LeaveRequests from "@/components/LeaveRequests";
import { useGetMe } from "@/hooks/useUsers";

export default function AdminDashboard() {
  const { data: me } = useGetMe();

  return (
    <>
      <Head>
        <title>Admin Dashboard — JunoTask</title>
      </Head>
      <div className="page flex">
        <Sidebar
          userName={me?.name || testUser?.name || ""}
          userRole={me?.jobPosition || testUser?.jobPosition || ""}
          activePath="/admin-dashboard"
          isAdmin={true}
          onSignOut={() => (window.location.href = "/oauth2/sign_out")}
        />
        <main className="content">
          <WelcomeMessage
            userName={me?.name || "Admin"}
            className="welcome"
          />
          <AdminStatsSection />
          <LeaveRequests />
        </main>
      </div>
    </>
  );
}

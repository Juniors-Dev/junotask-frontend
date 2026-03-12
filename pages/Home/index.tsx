import { testUser } from "@/lib/testUser";
import WelcomeMessage from "@/components/Ui/WelcomeMessage/WelcomeMessage";
import StatsSection from "@/components/Stats";
import TaskTable from "@/components/TaskTable";
import ActionMenu from "@/components/ActionMenue";
import Sidebar from "@/components/SideBar";
import RegisterTask from "@/components/RegisterTask";
import RegisterRequest from "@/components/RegisterRequest";
import { useGetMe } from "@/hooks/useUsers";
import { usePanel } from "@/context/PanelContext";

export default function Home() {
  const { data: me } = useGetMe();
  const { openPanel } = usePanel();

  return (
    <div className="page flex">
      <Sidebar
        userName={me?.name || testUser?.name || ""}
        userRole={me?.jobPosition || testUser?.jobPosition || ""}
        activePath="/"
        isAdmin={me?.isAdmin}
        onSignOut={() => (window.location.href = "/oauth2/sign_out")}
      />
      <main className="content">
        <WelcomeMessage
          userName={me?.name || testUser?.name || ""}
          className="welcome"
        />
        <StatsSection />
        <div className="flex flex-wrap gap-8">
          <TaskTable className="flex-1 min-w-80" />
          <ActionMenu
            className="flex-1 min-w-72"
            onRegisterTask={() =>
              openPanel({
                title: "Register Task",
                content: <RegisterTask />,
              })
            }
            onRequestLeave={() =>
              openPanel({
                title: "Request Leave",
                content: <RegisterRequest />,
              })
            }
          />
        </div>
      </main>
    </div>
  );
}

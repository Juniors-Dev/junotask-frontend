import React from "react";
import Card from "@/components/Ui/Card/Card";
import StatusBadge from "@/components/Ui/StatusBadge/StatusBadge";
import Icon from "@/components/Ui/Icon/Icon";
import { AdminStats } from "@/enums/adminStats";
import {
  adminCardStyles,
  adminIconStyles,
  adminTagStyles,
} from "@/components/Ui/Card/Card.styles";
import { usePendingLeaves } from "@/hooks/useLeaves";
import { useGetAllUsers } from "@/hooks/useUsers";
import { useDashboardCount } from "@/hooks/useDashboard";

export default function AdminStatsSection() {
  const { data: pendingLeaves } = usePendingLeaves();
  const { data: users } = useGetAllUsers();
  const { data: dashboard } = useDashboardCount();
  const counts = dashboard?.member?.[0];

  return (
    <div className="flex flex-wrap gap-6">
      <Card
        className={adminCardStyles[AdminStats.PENDING]}
        iconClassName={adminIconStyles[AdminStats.PENDING]}
        tag={
          <StatusBadge
            status="Pending"
            className={adminTagStyles[AdminStats.PENDING]}
          />
        }
        title="Pending Requests"
        icon={<Icon name="Clock" size={20} />}
        data={pendingLeaves?.totalItems ?? 0}
      />
      <Card
        className={adminCardStyles[AdminStats.EMPLOYEES]}
        iconClassName={adminIconStyles[AdminStats.EMPLOYEES]}
        tag={
          <StatusBadge
            status="Team"
            className={adminTagStyles[AdminStats.EMPLOYEES]}
          />
        }
        title="Total Employees"
        icon={<Icon name="Users" size={20} />}
        data={users?.totalItems ?? 0}
      />
      <Card
        className={adminCardStyles[AdminStats.PROJECTS]}
        iconClassName={adminIconStyles[AdminStats.PROJECTS]}
        tag={
          <StatusBadge
            status="Active"
            className={adminTagStyles[AdminStats.PROJECTS]}
          />
        }
        title="Active Projects"
        icon={<Icon name="FolderOpen" size={20} />}
        data={counts?.activeProjects ?? 0}
      />
    </div>
  );
}

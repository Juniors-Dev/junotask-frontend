import React from "react";
import Card from "@/components/Ui/Card/Card";
import StatusBadge from "@/components/Ui/StatusBadge/StatusBadge";
import Icon from "@/components/Ui/Icon/Icon";
import { Stats } from "@/enums/stats";
import {
  statsCardStyles,
  statsIconStyles,
  statsTagStyles,
} from "@/components/Ui/Card/Card.styles";
import { useDashboardCount } from "@/hooks/useDashboard";

export default function StatsSection() {
  const { data } = useDashboardCount();
  const counts = data?.member?.[0];

  return (
    <div className="flex flex-wrap gap-6">
      <Card
        className={statsCardStyles[Stats.ACTIVE]}
        iconClassName={statsIconStyles[Stats.ACTIVE]}
        tag={
          <StatusBadge
            status="Active"
            className={statsTagStyles[Stats.ACTIVE]}
          />
        }
        title="Active Projects"
        icon={<Icon name="FolderOpen" size={20} />}
        data={counts?.activeProjects ?? 0}
      />
      <Card
        className={statsCardStyles[Stats.REVIEW]}
        iconClassName={statsIconStyles[Stats.REVIEW]}
        tag={
          <StatusBadge
            status="In Progress"
            className={statsTagStyles[Stats.REVIEW]}
          />
        }
        title="Active Tasks"
        icon={<Icon name="Clock" size={20} />}
        data={counts?.activeTasks ?? 0}
      />
      <Card
        className={statsCardStyles[Stats.DONE]}
        iconClassName={statsIconStyles[Stats.DONE]}
        tag={
          <StatusBadge
            status="Completed"
            className={statsTagStyles[Stats.DONE]}
          />
        }
        title="Completed Tasks"
        icon={<Icon name="Check" size={20} />}
        data={counts?.completedTasks ?? 0}
      />
      <Card
        className={statsCardStyles[Stats.LEAVE]}
        iconClassName={statsIconStyles[Stats.LEAVE]}
        tag={
          <StatusBadge
            status="Leave"
            className={statsTagStyles[Stats.LEAVE]}
          />
        }
        title="Remaining Leave"
        icon={<Icon name="Umbrella" size={20} />}
        data={
          counts?.remainingLeaveDays
            ? `${counts.remainingLeaveDays} Days`
            : "Not on leave"
        }
      />
    </div>
  );
}

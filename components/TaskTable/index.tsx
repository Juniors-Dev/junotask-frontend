import React from "react";
import { useDashboard } from "@/hooks/useDashboard";
import StatusBadge from "@/components/Ui/StatusBadge/StatusBadge";
import {
  projectStatusStyles,
  leaveTypeStyles,
} from "@/components/Ui/StatusBadge/StatusBadge.styles";
import { ProjectStatus } from "@/enums/project";
import { LeaveType } from "@/enums/leave";

const tableHead = ["Person", "Status", "Project"];

export default function TaskTable({ className }: { className?: string }) {
  const { data: dashboardData, isLoading } = useDashboard();

  const members = dashboardData?.member ?? [];

  if (isLoading) {
    return <p className="text-sm text-faint">Loading...</p>;
  }

  return (
    <div className={`table-wrap ${className ?? ""}`}>
      <div className="table-header">
        <h2 className="font-bold text-lg text-heading">Team Overview</h2>
        <button className="text-primary text-sm font-semibold hover:underline">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="table-head">
            <tr>
              {tableHead.map((h) => (
                <th key={h} className="table-cell">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {members.map((member) => {
              const leave = member.activeLeave;
              const project = member.activeProject;
              const statusStyle = leave
                ? leaveTypeStyles[leave.type as LeaveType]
                : project
                  ? projectStatusStyles[project.statusLabel as ProjectStatus]
                  : "";

              const statusLabel = leave
                ? leave.type
                : project
                  ? project.statusLabel
                  : "Available";

              return (
                <tr key={`member-${member.id}`} className="table-row">
                  <td className="table-cell font-medium text-heading">
                    {member.name}
                  </td>
                  <td className="table-cell">
                    <StatusBadge status={statusLabel} className={statusStyle} />
                  </td>
                  <td className="table-cell text-body">
                    {leave ? "—" : project ? project.name : "—"}
                  </td>
                </tr>
              );
            })}
            {members.length === 0 && (
              <tr>
                <td colSpan={3} className="table-cell text-muted text-center">
                  No team members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

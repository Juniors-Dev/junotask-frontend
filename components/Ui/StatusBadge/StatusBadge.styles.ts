import { TaskStatus } from "@/enums/task";
import { LeaveType, LeaveStatus } from "@/enums/leave";
import { ProjectStatus } from "@/enums/project";

export const taskStatusStyles: Record<TaskStatus, string> = {
  [TaskStatus.WORKING]: "badge bg-blue-100 text-blue-700",
  [TaskStatus.REVIEW]: "badge bg-amber-100 text-amber-700",
  [TaskStatus.DONE]: "badge bg-emerald-100 text-emerald-700",
};

export const leaveTypeStyles: Record<LeaveType, string> = {
  [LeaveType.VACATION]: "badge bg-purple-100 text-purple-600",
  [LeaveType.SICK]: "badge bg-red-100 text-red-600",
  [LeaveType.PERSONAL]: "badge bg-blue-100 text-blue-600",
};

export const leaveStatusStyles: Record<LeaveStatus, string> = {
  [LeaveStatus.PENDING]: "badge bg-amber-100 text-amber-700",
  [LeaveStatus.APPROVED]: "badge bg-emerald-100 text-emerald-700",
  [LeaveStatus.DECLINED]: "badge bg-red-100 text-red-700",
  [LeaveStatus.CANCELLED]: "badge bg-gray-100 text-gray-600",
  [LeaveStatus.ALL]: "",
};

export const projectStatusStyles: Record<ProjectStatus, string> = {
  [ProjectStatus.WORKING]: "badge bg-blue-100 text-blue-700",
  [ProjectStatus.DONE]: "badge bg-emerald-100 text-emerald-700",
};

export interface DashboardProject {
  id: number;
  name: string;
  statusLabel: string;
}

export interface DashboardLeave {
  id: number;
  type: string;
  stateLabel: string;
  startDate: string;
  endDate: string;
}

export interface DashboardItem {
  id: number;
  name: string;
  jobPosition: string | null;
  activeProject: DashboardProject | null;
  activeLeave: DashboardLeave | null;
}

export interface DashboardCount {
  activeProjects: number;
  activeTasks: number;
  completedTasks: number;
  remainingLeaveDays: number;
}

export enum LeaveType {
  VACATION = "VACATION",
  SICK = "SICK",
  PERSONAL = "PERSONAL",
}

export enum LeaveStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  DECLINED = "Declined",
  CANCELLED = "Cancelled",
  ALL = "All",
}

export function getLeaveStatusCode(status: LeaveStatus): number {
  switch (status) {
    case LeaveStatus.ALL:
      return 0;
    case LeaveStatus.PENDING:
      return 1;
    case LeaveStatus.APPROVED:
      return 2;
    case LeaveStatus.DECLINED:
      return 3;
    case LeaveStatus.CANCELLED:
      return 4;
    default:
      return 1;
  }
}

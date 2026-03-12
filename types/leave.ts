import { LeaveType } from "../enums/leave";
import { RelatedUser } from "./api";

export interface Leave {
  id: number;
  user: RelatedUser;
  type: LeaveType;
  stateLabel: string;
  startDate: string;
  endDate: string;
  state: number;
  comment?: string;
}

export interface LeaveInput {
  type: LeaveType;
  startDate: string;
  endDate: string;
  user: string;
  comment?: string;
}

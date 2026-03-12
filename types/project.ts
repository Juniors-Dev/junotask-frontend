import { RelatedUser } from "./api";

export interface Project {
  id: number;
  user: RelatedUser;
  name: string;
  statusLabel: string;
  startedAt: string;
  completedAt: string | null;
}

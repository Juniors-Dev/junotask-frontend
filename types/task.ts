import { TaskStatus } from "../enums/task";
import { RelatedUser } from "./api";

export interface Task {
  id: number;
  user: RelatedUser;
  title: string;
  project: { "@id": string; name: string };
  status: TaskStatus;
  startedAt: string;
  completedAt: string | null;
}

export interface CreateTask {
  title: string;
  project: string; // IRI like "/api/projects/1"
  status: TaskStatus;
  user: string;
  startedAt: string;
}

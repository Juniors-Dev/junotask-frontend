import { jobPosition } from "../enums/user";

export interface User {
  id: number;
  googleId: string | null;
  email: string;
  name: string;
  jobPosition: jobPosition;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string | null;
}

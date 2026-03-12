import { User } from "@/types/user";
import { jobPosition } from "@/enums/user";

export const testUser: User = {
  id: 1,
  googleId: null,
  email: "johan@juniors.dev",
  name: "Johan",
  jobPosition: jobPosition.FULLSTACK,
  isAdmin: true,
  createdAt: new Date().toISOString(),
  updatedAt: null,
};

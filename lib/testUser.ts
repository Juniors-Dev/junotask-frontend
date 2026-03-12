import { User } from "@/types/user";
import { jobPosition } from "@/enums/user";

const isDev = process.env.NODE_ENV !== "production";

export const testUser: User | null = isDev
  ? {
      id: 1,
      googleId: null,
      email: "johan@juniors.dev",
      name: "Johan",
      jobPosition: jobPosition.FULLSTACK,
      isAdmin: true,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    }
  : null;

import { Maybe } from "@/app/util/type-utilities";
import { prisma } from "../db";

export const getUserByClerkId = async (clerkId: Maybe<string>) => {
  if (!clerkId) throw new Error("Clerk ID is required");

  const user = await prisma.user.findFirst({
    where: {
      clerkId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

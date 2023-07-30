import { prisma } from "@/db";
import { NextResponse } from "next/server";

type RequestBody = {
  data: {
    id: string;
  };
  object: string;
  type: "user.created" | "user.deleted" | "user.updated";
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;
    const type = body.type;
    if (type === "user.created") {
      // Check if we have a user in the database
      const user = await prisma.user.findUnique({
        where: {
          clerkId: body.data.id,
        },
      });
      if (!user) {
        // Create a new user in the database
        await prisma.user.create({
          data: {
            clerkId: body.data.id,
          },
        });
        return NextResponse.json({ success: true, message: "User created" });
      }
      return NextResponse.json({
        success: true,
        message: "User already exists",
      });
    }
    if (type === "user.deleted") {
      // Check if we have a user in the database
      const user = await prisma.user.findUnique({
        where: {
          clerkId: body.data.id,
        },
      });
      if (user) {
        // Delete the user from the database
        await prisma.user.delete({
          where: {
            clerkId: body.data.id,
          },
        });
        return NextResponse.json({ success: true, message: "User deleted" });
      }
      return NextResponse.json({
        success: true,
        message: "User does not exist",
      });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

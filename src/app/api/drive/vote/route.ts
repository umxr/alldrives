import { getUserByClerkId, prisma } from "@/db";
import { getAuth } from "@clerk/nextjs/server";
import { VoteType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  driveId: string;
  voteType: VoteType;
};

export async function POST(request: NextRequest) {
  try {
    const clerkUser = getAuth(request);
    const dbUser = await getUserByClerkId(clerkUser.userId);
    const body = (await request.json()) as RequestBody;
    const driveId = body.driveId;

    // Create Vote
    const vote = await prisma.vote.create({
      data: {
        driveId,
        userId: dbUser?.id as number,
        voteType: body.voteType,
      },
    });

    revalidatePath(`/drives/${driveId}`);
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    console.log(request.nextUrl.search);
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

import { prisma } from "@/db";
import { getDrives } from "@/groq/getDrives";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch and check if we have Drives in Sanity
    const sanityDrives = await getDrives();
    if (sanityDrives?.length === 0) {
      return new Response("No drives in Sanity found", { status: 200 });
    }
    const dbDrives = await prisma.drive.findMany();
    // Check if we have Drives in the Database.
    // If we dont then we need to add all Sanity Drives to the Database
    if (dbDrives.length === 0) {
      const sanityDriveIds = sanityDrives!.map((drive) => drive._id);
      const newDrives = await prisma.drive.createMany({
        data: sanityDriveIds.map((id) => ({ sanityId: id })),
      });
      return NextResponse.json({ message: "New drives added", newDrives });
    } else {
      // Check if we need to sync the Database with Sanity
      const sanityDriveIds = sanityDrives!.map((drive) => drive._id);
      const dbDriveIds = dbDrives.map((drive) => drive.sanityId);
      const drivesToSync = sanityDriveIds.filter(
        (id) => !dbDriveIds.includes(id)
      );
      if (drivesToSync.length === 0) {
        return new Response("All drives synced with database", { status: 200 });
      }
      const newDrives = await prisma.drive.createMany({
        data: drivesToSync.map((id) => ({ sanityId: id })),
      });
      return NextResponse.json({ message: "New drives added", newDrives });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

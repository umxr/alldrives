import { DriveList } from "@/components/DriveList";
import { getDrives } from "@/groq/getDrives";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Drives - Road Trips & Routes",
  description:
    "Explore breathtaking driving routes, scenic road trips & hidden gems. Join a global community of road trip enthusiasts. Start your journey with All Drives!",
  twitter: {
    title: "All Drives - Road Trips & Routes",
    description:
      "Explore breathtaking driving routes, scenic road trips & hidden gems. Join a global community of road trip enthusiasts. Start your journey with All Drives!",
  },
  openGraph: {
    title: "All Drives - Road Trips & Routes",
    description:
      "Explore breathtaking driving routes, scenic road trips & hidden gems. Join a global community of road trip enthusiasts. Start your journey with All Drives!",
    url: "https://alldrives.vercel.app/drives",
  },
};

const DrivePage = async () => {
  const drives = await getDrives();
  return <DriveList items={drives} />;
};

export const revalidate = 60 * 60;

export default DrivePage;

import { DriveList } from "@/components/DriveList";
import { Hero } from "@/components/Hero";
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
    url: "https://alldrives.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <DriveList />
    </>
  );
}

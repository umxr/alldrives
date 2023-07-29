import { DriveList } from "@/components/DriveList";
import { Hero } from "@/components/Hero";
import { getDrives } from "@/groq/getDrives";
import { Metadata } from "next";
import heroImage from "../public/banner.jpg";

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

export default async function Home() {
  const drives = await getDrives({
    limit: 6,
  });
  return (
    <>
      <Hero backgroundImage={heroImage}>
        <Hero.Title>Embark on Unforgettable Journeys</Hero.Title>
        <Hero.Content>
          Discover breathtaking driving routes, picturesque landscapes, and
          hidden gems on epic road trips curated by travel experts and fellow
          explorers. Join our vibrant community and fuel your wanderlust with
          All Drives - your gateway to adventure.
        </Hero.Content>
      </Hero>
      <DriveList items={drives} showCta />
    </>
  );
}

export const revalidate = 60 * 60;

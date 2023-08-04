import { DriveVote } from "@/components/DriveVote";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { getDriveBySlug } from "@/groq/getDriveBySlug";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, auth } from "@clerk/nextjs";
import { getUserByClerkId, prisma } from "@/db";

type DrivePageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: DrivePageProps): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const drive = await getDriveBySlug(slug);

  if (!drive) {
    return {
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
        url: `https://alldrives.vercel.app/drives/${slug}`,
      },
    };
  }

  return {
    title: `${drive?.title} - All Drives`,
    description: `Embark on a thrilling road trip with ${drive?.title}. Explore scenic landscapes, captivating routes, and unforgettable experiences. Start your adventure with All Drives.`,
    twitter: {
      title: `${drive?.title} - All Drives`,
      description: `Embark on a thrilling road trip with ${drive?.title}. Explore scenic landscapes, captivating routes, and unforgettable experiences. Start your adventure with All Drives.`,
    },
    openGraph: {
      title: `${drive?.title} - All Drives`,
      description: `Embark on a thrilling road trip with ${drive?.title}. Explore scenic landscapes, captivating routes, and unforgettable experiences. Start your adventure with All Drives.`,
      url: `https://alldrives.vercel.app/drives/${drive?.slug}`,
    },
  };
}

const Drive = async (props: DrivePageProps) => {
  const { params } = props;
  const slug = params.slug;
  const { userId } = auth();
  const dbUser = await getUserByClerkId(userId);
  const pageData = await getDriveBySlug(slug);
  const voteData = await prisma.vote.findFirst({
    where: {
      driveId: pageData?._id,
      userId: dbUser.id,
    },
  });

  if (!pageData) {
    return notFound();
  }
  if (pageData.public === false) {
    return notFound();
  }
  return (
    <>
      <Hero backgroundImage={pageData.mainImage.url}>
        <Hero.Title>{pageData.title}</Hero.Title>
        <Hero.Content>{pageData.details.highlight}</Hero.Content>
      </Hero>
      <Stats>
        <Stats.List>
          <Stats.ListItem
            value={`${pageData.details.distance.toString()} Miles`}
          />
          <Stats.ListItem value={pageData.details.location} />
          <Stats.ListItem
            value="See Route"
            name="Click to open the route in google maps"
            link={pageData.details.routeUrl}
          />
        </Stats.List>
      </Stats>
      <SignedIn>
        <DriveVote driveId={pageData._id} />
      </SignedIn>
    </>
  );
};

export default Drive;

import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { getDriveBySlug } from "@/groq/getDriveBySlug";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type DrivePageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: DrivePageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const drive = await getDriveBySlug(slug);

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
  const pageData = await getDriveBySlug(slug);
  if (!pageData) {
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
    </>
  );
};

export default Drive;

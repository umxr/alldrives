import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { getDriveBySlug } from "@/groq/getDriveBySlug";
import { notFound } from "next/navigation";

type DrivePageProps = {
  params: Record<string, string>;
};

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

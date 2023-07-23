import { Hero } from "@/components/Hero";
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
    </>
  );
};

export default Drive;

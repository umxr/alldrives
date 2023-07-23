import { clientFetch } from "@/lib/sanityClient";
import { groq } from "next-sanity";

type DriveDetails = {
  distance: number;
  highlight: string;
  location: string;
  routeUrl: string;
};

export type Drive = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: string;
  details: string;
  mainImage: {
    url: string;
  };
};

export const getDrivesQuery = groq`
  *[_type == "drive"] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    details,
    mainImage {
      ...asset -> {
        url
      }
    }
  }
`;

export const getDrives = async (): Promise<Drive[] | undefined> => {
  try {
    const drives = await clientFetch(getDrivesQuery);
    return drives;
  } catch (error) {
    console.error(error);
  }
};

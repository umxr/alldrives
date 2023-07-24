import { groq } from "next-sanity";

export const drive = groq`
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  details,
  public,
  mainImage {
    ...asset -> {
      url
    }
  }
`;

export type DriveDetails = {
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
  details: DriveDetails;
  public: boolean;
  mainImage: {
    url: string;
  };
};

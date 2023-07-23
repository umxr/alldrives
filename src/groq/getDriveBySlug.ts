import { groq } from "next-sanity";
import { Drive, drive } from "./drive";
import { clientFetch } from "@/lib/sanityClient";

export const getDriveBySlugQuery = groq`
  *[_type == "drive" && slug.current == $slug] {
    ${drive}
  }
`;

export const getDriveBySlug = async (
  slug: string
): Promise<Drive | undefined> => {
  try {
    const drive = await clientFetch(getDriveBySlugQuery, { slug });
    if (drive[0]) return drive[0];
    return undefined;
  } catch (error) {
    console.error(error);
  }
};

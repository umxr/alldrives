import { clientFetch } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import { Drive, drive } from "./drive";

export const getDrivesQuery = groq`
  *[_type == "drive"] {
    ${drive}
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

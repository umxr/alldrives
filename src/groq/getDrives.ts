import { clientFetch } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import { Drive, drive } from "./drive";

export const getDrivesQuery = groq`
  *[_type == "drive" && public == true] | order(_createdAt asc) [$start...$end] {
    ${drive}
  }
`;

type GetDrivesOpts = {
  limit?: number;
};

export const getDrives = async (
  opts?: GetDrivesOpts
): Promise<Drive[] | undefined> => {
  try {
    const drives = await clientFetch(getDrivesQuery, {
      start: 0,
      end: opts?.limit || 100,
    });
    return drives;
  } catch (error) {
    console.error(error);
  }
};

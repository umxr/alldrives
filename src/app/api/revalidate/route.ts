import type { NextApiRequest, NextApiResponse } from "next";
import { SanityDocument } from "next-sanity";
import { parseBody } from "next-sanity/webhook";

// Export the config from next-sanity to enable validating the request body signature properly
export { config } from "next-sanity/webhook";

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET);

    const body = result.body as SanityDocument & {
      slug: { current: string };
    };

    if (!result.isValidSignature) {
      const message = "Invalid signature";
      console.warn(message);
      res.status(401).json({ message });
      return;
    }

    const staleRoute = `/drives/${body.slug.current}`;
    await res.revalidate(staleRoute);
    const message = `Updated route: ${staleRoute}`;
    console.log(message);
    return res.status(200).json({ message });
  } catch (err) {
    console.error(err);
    // @ts-ignore
    return res.status(500).json({ message: err.message });
  }
}

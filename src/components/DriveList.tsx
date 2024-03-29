import Image from "next/image";
import { format } from "date-fns";
import { Drive } from "@/groq/drive";
import Link from "next/link";

type DriveListProps = {
  items?: Drive[];
  showCta?: boolean;
};

export const DriveList = (props: DriveListProps) => {
  const { items, showCta = false } = props;
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover Thrilling Drives Worldwide
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Curated driving routes for global explorers. Join us and ignite your
            passion for adventure!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {items?.map((item) => (
            <article
              key={item._id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={item.mainImage.url}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                fill
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={item._updatedAt} className="mr-8">
                  {format(new Date(item._updatedAt), "MMM d, yyyy")}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={`/drives/${item.slug}`}>
                  <span className="absolute inset-0" />
                  {item.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
        {showCta && (
          <Link
            href="/drives"
            className="mt-10 flex items-center justify-center space-x-3"
          >
            <p className="text-lg text-center font-bold tracking-tight text-gray-900">
              See all routes{" "}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

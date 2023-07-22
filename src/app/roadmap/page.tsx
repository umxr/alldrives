import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap - All Drives",
  description:
    "Discover our journey and plans at All Drives. Join us in redefining road trips with exciting routes, a vibrant community, and global adventures.",
  twitter: {
    title: "Roadmap - All Drives",
    description:
      "Discover our journey and plans at All Drives. Join us in redefining road trips with exciting routes, a vibrant community, and global adventures.",
  },
  openGraph: {
    title: "Roadmap - All Drives",
    description:
      "Discover our journey and plans at All Drives. Join us in redefining road trips with exciting routes, a vibrant community, and global adventures.",
  },
};

const TimelinePage = () => {
  return (
    <div className="bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Navigating Our Journey Together
        </h1>
        <p className="mt-6 text-xl leading-8">
          Join the All Drives community and navigate our journey together as we
          redefine road trips. Ignite your wanderlust, explore breathtaking
          driving routes, and connect with like-minded enthusiasts from around
          the world. Together, we&apos;ll discover new horizons, forge
          unforgettable memories, and celebrate the joy of hitting the open
          road.
        </p>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Phase 1: Laying the Foundation
          </h2>
          <p className="mt-6">
            In the initial phase, our team will work tirelessly to build the
            foundation of All Drives. This involves creating a user-friendly
            platform that allows you to discover and explore breathtaking
            driving routes from around the world. We will curate a collection of
            diverse routes, ensuring each one offers a unique and unforgettable
            experience.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Phase 2: Building the Community
          </h2>
          <p className="mt-6">
            As the platform takes shape, we&apos;ll focus on building a vibrant
            and engaged community of road trip enthusiasts. Through forums,
            social media, and interactive features, we will encourage users to
            connect, share their experiences, and offer valuable insights. All
            Drives will become the go-to hub for passionate explorers seeking
            like-minded companions.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Phase 3: Expanding Horizons
          </h2>
          <p className="mt-6">
            In our second year, we aim to expand our reach and offerings
            significantly. This includes adding more curated driving routes
            across different continents and cultures, catering to a broader
            audience of adventure seekers. We will also enhance the platform
            with user-generated content, allowing you to contribute your
            favorite routes and experiences.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Phase 4: Personalized Journeys
          </h2>
          <p className="mt-6">
            By year three, we envision All Drives as a personalized journey
            planner. Our platform will use advanced algorithms and user
            preferences to recommend driving routes tailored to your specific
            interests and travel style. Whether you&apos;re seeking scenic
            beauty, historical landmarks, or adrenaline-pumping routes, All
            Drives will be your ultimate companion.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Phase 5: Global Expeditions (Beyond Year 3)
          </h2>
          <p className="mt-6">
            Looking ahead, we plan to become a global leader in the road trip
            adventure space. Our vision includes organizing exciting group
            expeditions, where members can embark on thrilling road trips with
            the support of experienced guides. These expeditions will take you
            to remote corners of the world, opening up new horizons and creating
            memories that last a lifetime.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Join Us on This Journey:
          </h2>
          <p className="mt-6">
            We&apos;re excited about the road ahead, and we can&apos;t do it
            without your support and feedback. As we progress through each
            phase, we&apos;ll keep you informed and involved every step of the
            way. Together, we&apos;ll redefine the way road trips are
            experienced and connect a community of explorers who share a love
            for the open road.
          </p>
          <p className="mt-6">
            Please note that the roadmap provided above is just a sample and can
            be customized based on your startup&apos;s actual timeline and
            plans. If you have specific milestones or details to add or modify,
            feel free to do so. The &quot;Road Map&quot; section is an
            opportunity to share your startup&apos;s vision and future goals
            with your audience, inspiring them to be part of your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;

import { UserProfile, auth } from "@clerk/nextjs";
import { notFound } from "next/navigation";

const Profile = () => {
  const clerk = auth();
  if (!clerk.sessionId) {
    return notFound();
  }
  return (
    <div className="h-full flex items-center justify-center w-full bg-gray-900 mb-8">
      <UserProfile />
    </div>
  );
};

export default Profile;

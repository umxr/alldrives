import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { forwardRef } from "react";

export const UserAvater = forwardRef<HTMLElement, {}>((props, ref) => {
  const { user } = useUser();
  if (!user)
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className="inline-block h-10 w-10 rounded-full bg-gray-500"
      />
    );
  return (
    <Image
      ref={ref as React.Ref<HTMLImageElement>}
      className="inline-block h-10 w-10 rounded-full"
      src={user?.profileImageUrl as string}
      alt={user?.fullName as string}
      height={40}
      width={40}
    />
  );
});

UserAvater.displayName = "UserAvater";

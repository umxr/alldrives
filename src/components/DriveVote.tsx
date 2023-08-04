"use client";

import { useUser } from "@clerk/nextjs";
import {
  FaceFrownIcon as FaceFrownIconOutline,
  FaceSmileIcon as FaceSmileIconOutline,
} from "@heroicons/react/24/outline";
import {
  FaceFrownIcon as FaceFrownIconSolid,
  FaceSmileIcon as FaceSmileIconSolid,
} from "@heroicons/react/24/solid";
import { VoteType } from "@prisma/client";
import { useCallback } from "react";

type DriveVoteProps = {
  driveId: string;
};

export const DriveVote = (props: DriveVoteProps) => {
  const { driveId } = props;

  const vote = useCallback(
    async (voteType: VoteType) => {
      const res = await fetch("/api/drive/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ driveId, voteType }),
      });
      const json = await res.json();
      console.log(json);
    },
    [driveId]
  );

  return (
    <div className="bg-gray-900 py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-4">
        <p className="text-white text-center font-semibold">
          How would you rate this drive?
        </p>
        <div className="flex justify-center space-x-4">
          <FaceSmileIconOutline
            className="h-8 w-8 text-green-500 cursor-pointer"
            onClick={() => vote(VoteType.UPVOTE)}
          />
          <FaceFrownIconOutline
            className="h-8 w-8 text-red-500 cursor-pointer"
            onClick={() => vote(VoteType.DOWNVOTE)}
          />
        </div>
      </div>
    </div>
  );
};

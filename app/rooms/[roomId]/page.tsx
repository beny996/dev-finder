import { TagsList } from "@/components/tags-list";
import { Badge } from "@/components/ui/badge";
import { getRoom } from "@/data-access/rooms";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { DevFinderVideo } from "./video-player";
import { splitTags } from "@/lib/utils";
import { unstable_noStore } from "next/cache";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;

  unstable_noStore();
  const room = await getRoom(roomId);

  if (!room) {
    return <div>No room of this ID found!</div>;
  }

  const tags = splitTags(room.tags);

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3  p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 ">
          <DevFinderVideo room={room} />
        </div>
      </div>
      <div className="col-span-1  p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
          {room.githubRepo && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={room.githubRepo}
              className="flex items-center gap-2  text-sm"
            >
              <GithubIcon />
              Github repo
            </Link>
          )}
          <p className="text-gray-600">{room?.description}</p>
          <TagsList tags={tags} />
        </div>
      </div>
    </div>
  );
}

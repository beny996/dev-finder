import { Button } from "@/components/ui/button";
import { getRooms } from "@/data-access/rooms";
import Link from "next/link";
import { SearchBar } from "./search-bar";
import { RoomCard } from "@/app/browse/room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function Home({ searchParams }: { searchParams: { search: string } }) {
  unstable_noStore();
  const rooms = await getRooms(searchParams.search);

  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find dev rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <div className="mb-12">
        <SearchBar />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard room={room} key={room.id} />;
        })}
      </div>

      {rooms.length === 0 && (
        <div className="flex justify-center items-center flex-col gap-4 mt-24">
          <Image src="/no-data.svg" width="200" height="200" alt="no data" />
          <h2 className="text-2xl">No room yet!</h2>
          <Button asChild>
            <Link href="/create-room">Create Room</Link>
          </Button>
        </div>
      )}
    </main>
  );
}

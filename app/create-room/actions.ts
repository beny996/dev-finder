"use server";

import { createRoom } from "@/data-access/rooms";
import { db } from "@/db";
import { room, Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "userId" | "id">) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a room!");
  }

  const room = await createRoom(roomData, session.user.id);

  revalidatePath("/");

  return room;
}

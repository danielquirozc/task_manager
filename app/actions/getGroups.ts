"use server"

import { getID } from "@/app/actions/getID";
import { prisma } from "@/lib/db/prisma";

export async function getGroups() {
  const userID = await getID()
  const fetchedGroups = await prisma.groups.findMany({
    where: {
      owner_id: userID
    }
  })
  
  return fetchedGroups
}
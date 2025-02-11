"use server"

import { prisma } from "@/lib/db/prisma";
import { getID } from "@/utils/getID";
import { groups } from "@prisma/client";

interface GroupWithPendingTask extends groups {
  pendingTask: number
}

export async function getGroups() {
  const userID = await getID()
  const fetchedGroups = await prisma.groups.findMany({
    where: {
      owner_id: userID
    }
  }) as GroupWithPendingTask[]

  for (let i = 0; i < fetchedGroups.length; i++) {
    const pendingTask = await prisma.tasks.count({
      where: {
        group_id: fetchedGroups[i].id,
        status: {
          not: 'DONE'
        }
      }
    });
    fetchedGroups[i].pendingTask = pendingTask
  } 
  return fetchedGroups
}
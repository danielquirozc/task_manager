import { prisma } from "@/lib/db/prisma";

export async function getTaskByGroup(groupID: number) {
  return await prisma.tasks.findMany({
    where: {
      group_id: Number(groupID)
    }
  })
}
import { getID } from "@/app/actions/getID";
import { prisma } from "@/lib/db/prisma";

export async function getTaskByGroup(groupID: number) {
  const userID = await getID();
  const group = await prisma.groups.findFirst({
    where: {
      id: Number(groupID),
      owner_id: userID
    }
  })
  
  if (!group) return { tasks: null, error: "Group not found" }

  const tasks = await prisma.tasks.findMany({
    where: {
      group_id: Number(groupID),
    },
    include: {
      tagsOnTasks: {
        select: {
          tags: true
        }
      }
    }
  })
  
  return { tasks, error: null }
}
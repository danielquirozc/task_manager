"use server"

import { prisma } from "@/lib/db/prisma";

export async function getTagsByTask(taskID: number) {
  const tags = await prisma.tags.findMany({ 
    where: {
      tagsOnTasks: {
        some: {
          task_id: taskID
        }
      }
    }
  })
  
  return tags
}
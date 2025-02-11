'use server'
import { prisma } from "@/lib/db/prisma"
import { TaskStatus } from "@/types/taskStatus";
import { tags } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createTask({ title, description, groupID, tags } : {
  title: string,
  description: string,
  groupID: number,
  tags: tags[]
}) {
  const response = await prisma.tasks.create({
    data: {
      title,
      description,
      group_id: Number(groupID),
      status: TaskStatus.DO
    }
  });
  if (tags.length > 0) {
    await prisma.tagsOnTasks.createMany({
      data: tags.map((tag) => ({
        task_id: response.id,
        tag_id: tag.id
      }))
    })
  }
  
  revalidatePath(`/group/${groupID}`);
  return response
}
'use server'

import { prisma } from "@/lib/db/prisma"
import { tags } from "@prisma/client"
import { revalidatePath } from "next/cache"

export interface UpdateTaskProps {
  id: number,
  title: string,
  description: string,
  tags: tags[]
}

export async function updateTask({ id, title, description, tags } : UpdateTaskProps) {

  const response = await prisma.tasks.update({
    where: {
      id: Number(id)
    },
    data: {
      title,
      description,
    }
  })

  if (tags.length > 0) {
    await prisma.tagsOnTasks.deleteMany({
      where: {
        task_id: Number(id)
      }
    })
    await prisma.tagsOnTasks.createMany({
      data: tags.map((tag) => ({
        task_id: Number(id),
        tag_id: tag.id
      }))
    })
  } else {
    await prisma.tagsOnTasks.deleteMany({
      where: {
        task_id: Number(id)
      }
    })
  }
  
  revalidatePath(`/`);
  
  return response
}
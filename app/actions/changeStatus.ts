'use server'

import { prisma } from "@/lib/db/prisma"
import { taskstatus } from "@prisma/client"
import { revalidatePath } from "next/cache"

export interface UpdateTaskProps {
  id: number,
  newStatus: taskstatus
}

export async function changeStatus({ id, newStatus }: UpdateTaskProps) {
  try {
    await prisma.tasks.update({
      where: {
        id: Number(id)
      },
      data: {
        status: newStatus
      }
    })
  } catch {
    throw new Error("Failed to update task status")
  }
  revalidatePath(`/`);
}
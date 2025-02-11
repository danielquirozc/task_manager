'use server'

import { prisma } from "@/lib/db/prisma"
import { TaskStatus } from "@/types/taskStatus"
import { revalidatePath } from "next/cache"

export interface UpdateTaskProps {
  id: number,
  newStatus: TaskStatus
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
  } catch (error) {

  }
  revalidatePath(`/`);
}
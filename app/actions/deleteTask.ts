"use server"
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTask(taskID: number) {
  try {
    await prisma.tagsOnTasks.deleteMany({
      where: {
        task_id: taskID
      }
    })
    await prisma.tasks.deleteMany({
      where: {
        id: taskID
      }
    })
  } catch (error) {
    throw new Error("Failed to delete task")
  }
  revalidatePath(`/`)
}
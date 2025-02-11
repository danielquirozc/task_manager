"use server"

import { prisma } from "@/lib/db/prisma"
import { getID } from "@/utils/getID"

export async function createTag({ title }: {
  title: string
}) {
  const userID = await getID()
  try {
    await prisma.tags.create({
      data: {
        title,
        users: {
          connect: {
            id: userID
          }
        }
      }
    })
  } catch {
    throw new Error("Failed to create tag")
  }
}
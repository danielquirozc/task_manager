"use server"

import { getID } from "@/app/actions/getID"
import { prisma } from "@/lib/db/prisma"

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
'use server'

import { getID } from "@/app/actions/getID"
import { prisma } from "@/lib/db/prisma"

export async function createGroup({ title }: {
  title: string
}) {
  const userID = await getID()
  if (!userID) return { error: "Failed to create group" }
  const data = await prisma.groups.create({
    data: {
      title: title,
      users: {
        connect: {
          id: userID
        }
      }
    }
  })
  return {
    error: !data ? "Failed to create group" : null,
  }
}
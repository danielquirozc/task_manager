'use server'

import { getID } from "@/app/actions/getID"
import { prisma } from "@/lib/db/prisma"

export async function getTags() {
  const userID = await getID()
  const data = await prisma.tags.findMany({
    where: {
      users: {
        id: userID
      }
    }
  })
  return data
}
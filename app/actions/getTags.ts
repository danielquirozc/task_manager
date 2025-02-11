'use server'

import { prisma } from "@/lib/db/prisma"
import { getID } from "@/utils/getID"

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
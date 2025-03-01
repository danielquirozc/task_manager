"use server"

import { prisma } from "@/lib/db/prisma"
import { getID } from "./getID"

export async function getUserInfo() {
  const userID = await getID()
  const userInfo = await prisma.users.findUnique({ where: { id: userID }, select: { username: true, created_at: true } })
  return userInfo
}
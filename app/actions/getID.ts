"use server"
import { decodeJwt } from "jose";
import { cookies } from "next/headers";

export async function getID() {
  const storedCookies = await cookies()
  const token = storedCookies.get('token')?.value
  if (!token) return
  const decodedToken = decodeJwt(token)
  if (!decodedToken.id) return
  return decodedToken.id as string
}
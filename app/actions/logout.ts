'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function logout() {
  const storedCookies = await cookies()
  const token = storedCookies.get('token')?.value
  if (!token) return
  storedCookies.delete('token')
  redirect('/login')
}